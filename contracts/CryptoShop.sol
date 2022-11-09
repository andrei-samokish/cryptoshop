// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

error AlreadyHasRole(bytes32 role);

contract CryptoShop is ERC1155, AccessControl, ERC1155Holder {
    bytes32 public constant SELLER_ROLE = keccak256("SELLER_ROLE");
    bytes32 public constant BUYER_ROLE = keccak256("BUYER_ROLE");
    mapping(address => string) public userNames;
    mapping(string => bool) private isTakenUsername;
    uint private uniqueItemsAmount;
    mapping(uint => Item) public items;
    mapping(address => uint[2][]) ownedItems; // user -> [id, ownedAmount]

    struct Item {
        string name;
        string desc;
        string imgIngfo;
        address payable seller;
        uint price;
    }

    event NewUser(address userAddress);

    constructor() ERC1155("") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        register("admin");
        becomeSeller();
    }

    function submitCommodity(
        string calldata _name,
        string calldata _desc,
        string calldata _imginfo,
        uint _price,
        uint _stock
    ) external onlyRole(SELLER_ROLE) {
        _mint(msg.sender, uniqueItemsAmount, _stock, "");
        Item memory newItem = Item(
            _name,
            _desc,
            _imginfo,
            payable(msg.sender),
            _price
        );
        items[uniqueItemsAmount] = newItem;
        ownedItems[msg.sender].push([uniqueItemsAmount, _stock]);
        uniqueItemsAmount = uniqueItemsAmount + 1;
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public override {
        _checkRole(BUYER_ROLE, to);
        super.safeTransferFrom(from, to, id, amount, data);
    }

    function buy(uint id, uint amount) external payable onlyRole(BUYER_ROLE) {
        require(msg.value == amount * items[id].price, "wrong sum!");
        (bool success, ) = address(this).call(
            abi.encodeWithSignature(
                "safeTransferFrom(address,address,uint256,uint256,bytes)",
                items[id].seller,
                msg.sender,
                id,
                amount,
                "0x00000000000000000000000000000000"
            )
        );
        require(success, "something went wrong!");
        ownedItems[msg.sender].push([id, amount]);
        _updateOwnedTokens(items[id].seller);
        items[id].seller.transfer(msg.value);
    }

    function withdrawFromSale(uint id) external {
        require(msg.sender == items[id].seller, "not allowed to do this!");
        _burn(msg.sender, id, balanceOf(msg.sender, id));
        _updateOwnedTokens(msg.sender);
    }

    function _updateOwnedTokens(address user) internal {
        uint[2][] storage userBalances = ownedItems[user];
        for (uint i = 0; i < userBalances.length; i++) {
            uint balanceOfCurrentToken = balanceOf(
                msg.sender,
                userBalances[i][0]
            );
            if (balanceOfCurrentToken == 0) {
                userBalances[i] = userBalances[userBalances.length - 1];
                userBalances.pop();
            }
            if (userBalances[i][1] != balanceOfCurrentToken)
                userBalances[i][1] = balanceOfCurrentToken;
        }
    }

    function becomeSeller() public onlyRole(BUYER_ROLE) {
        if (hasRole(SELLER_ROLE, msg.sender))
            revert AlreadyHasRole(SELLER_ROLE);
        _grantRole(SELLER_ROLE, msg.sender);
        setApprovalForAll(address(this), true);
    }

    function register(string memory name) public {
        if (hasRole(BUYER_ROLE, msg.sender)) revert AlreadyHasRole(BUYER_ROLE);
        changeName(name);
        _grantRole(BUYER_ROLE, msg.sender);
        emit NewUser(msg.sender);
    }

    function changeName(string memory name) public {
        require(
            !isTakenUsername[name] &&
                bytes(name).length <= 32 &&
                bytes(name).length != 0,
            "wrong name"
        );
        userNames[msg.sender] = name;
        isTakenUsername[name] = true;
    }

    // The following function is override required by Solidity.
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl, ERC1155Receiver)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

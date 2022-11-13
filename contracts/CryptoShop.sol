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
    mapping(address => uint[2][]) public ownedItems; // user -> [id, ownedAmount]

    struct Item {
        string name;
        string desc;
        string imgInfo;
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

    function fillStock(uint id, uint amount) external {
        require(items[id].seller == msg.sender, "not allowed");
        _mint(msg.sender, id, amount, "");
        _updateOwnedTokens(msg.sender);
    }

    function buy(uint id, uint amount) external payable onlyRole(BUYER_ROLE) {
        require(msg.value == amount * items[id].price, "wrong sum!");
        bool doesHaveThisItem = balanceOf(msg.sender, id) == 0 ? false : true;

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
        if (!doesHaveThisItem) ownedItems[msg.sender].push([id, amount]);
        else _updateOwnedTokens(msg.sender);
        _updateOwnedTokens(items[id].seller);
        items[id].seller.transfer(msg.value);
    }

    function withdrawFromSale(uint id) external {
        require(msg.sender == items[id].seller, "not allowed to do this!");
        _burn(msg.sender, id, balanceOf(msg.sender, id));
        delete items[id];
        _updateOwnedTokens(msg.sender);
    }

    function _updateOwnedTokens(address user) internal {
        uint[2][] storage userItemsInfo = ownedItems[user];
        for (uint i = 0; i < userItemsInfo.length; i++) {
            uint balanceOfCurrentToken = balanceOf(user, userItemsInfo[i][0]);
            if (userItemsInfo[i][1] != balanceOfCurrentToken)
                userItemsInfo[i][1] = balanceOfCurrentToken;
            if (balanceOfCurrentToken == 0) {
                userItemsInfo[i] = userItemsInfo[userItemsInfo.length - 1];
                userItemsInfo.pop();
            }
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
        _grantRole(BUYER_ROLE, msg.sender);
        changeName(name);
        emit NewUser(msg.sender);
    }

    function changeName(string memory name) public onlyRole(BUYER_ROLE) {
        require(
            !isTakenUsername[name] &&
                bytes(name).length <= 32 &&
                bytes(name).length != 0,
            "wrong name"
        );
        userNames[msg.sender] = name;
        isTakenUsername[name] = true;
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

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

contract CryptoShop is ERC1155, AccessControl, ERC1155Holder {
    bytes32 public constant SELLER_ROLE = keccak256("MINTER_ROLE");
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
        address seller;
        uint price;
    }

    event NewUser(address userAddress);

    constructor() ERC1155("") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        register("admin");
        _grantRole(SELLER_ROLE, msg.sender);
    }

    function submitCommodity(
        string calldata _name,
        string calldata _desc,
        string calldata _imginfo,
        uint _price,
        uint _stock
    ) external onlyRole(SELLER_ROLE) {
        _mint(_msgSender(), uniqueItemsAmount, _stock, "");
        Item memory newItem = Item(
            _name,
            _desc,
            _imginfo,
            _msgSender(),
            _price
        );
        items[uniqueItemsAmount] = newItem;
        ownedItems[_msgSender()].push([uniqueItemsAmount, _stock]);
        uniqueItemsAmount = uniqueItemsAmount + 1;
    }

    function buy(uint id, uint amount) external payable onlyRole(BUYER_ROLE) {
        require(msg.value == amount * items[id].price, "wrong sum!");
        (bool success, ) = address(this).call(
            abi.encodeWithSignature(
                "safeTransferFrom(address,address,uint256,uint256,bytes)",
                items[id].seller,
                _msgSender(),
                id,
                amount,
                "0x00000000000000000000000000000000"
            )
        );
        require(success, "something went wrong!");
        ownedItems[_msgSender()].push([id, amount]);
        _updateOwnedTokens(items[id].seller);
    }

    function _updateOwnedTokens(address user) internal {
        uint[2][] storage userBalances = ownedItems[user];
        for (uint i = 0; i < userBalances.length; i++) {
            uint balanceOfCurrentToken = balanceOf(
                _msgSender(),
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

    function becomeSeller() external onlyRole(BUYER_ROLE) {
        require(!hasRole(SELLER_ROLE, _msgSender()), "already a seller");
        _grantRole(SELLER_ROLE, _msgSender());
        setApprovalForAll(address(this), true);
    }

    function register(string memory name) public {
        require(!hasRole(BUYER_ROLE, _msgSender()), "already registered!");
        changeName(name);
        _grantRole(BUYER_ROLE, _msgSender());
        emit NewUser(_msgSender());
    }

    function changeName(string memory name) public {
        require(
            !isTakenUsername[name] &&
                bytes(name).length <= 32 &&
                bytes(name).length != 0,
            "wrong name"
        );
        userNames[_msgSender()] = name;
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

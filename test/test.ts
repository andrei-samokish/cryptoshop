import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";

describe("Cryptoshop contract test", () => {
  async function deployFixture() {
    const Cryptoshop = await ethers.getContractFactory("CryptoShop");
    const [admin, buyer, seller, user] = await ethers.getSigners();
    const contract = await Cryptoshop.deploy();
    await contract.deployed();
    return { contract, buyer, seller, user };
  }

  it("names do work", async () => {
    const { contract, user } = await loadFixture(deployFixture);
    await expect(contract.connect(user).register("admin")).to.be.revertedWith(
      "wrong name"
    );
    await expect(contract.connect(user).register("")).to.be.revertedWith(
      "wrong name"
    );
    await expect(
      contract
        .connect(user)
        .register("super very long name... even longer than 33 symbols")
    ).to.be.revertedWith("wrong name");

    await expect(contract.connect(user).changeName("vitaly")).to.be.reverted;
    await contract.connect(user).register("andrei");

    const buyerRole = ethers.utils.solidityKeccak256(
      ["string"],
      ["BUYER_ROLE"]
    );

    expect(await contract.hasRole(buyerRole, user.address)).to.eq(true);
    expect(await contract.userNames(user.address)).to.eq("andrei");

    await expect(
      contract.connect(user).register("vitaly")
    ).to.be.revertedWithCustomError(contract, "AlreadyHasRole");
  });

  it("possible to become seller", async () => {
    const { contract, seller, user } = await loadFixture(deployFixture);
    const sellerRegistration = await contract
      .connect(seller)
      .register("seller");
    expect(await sellerRegistration).to.emit(contract, "NewUser");
    expect(await contract.connect(seller).becomeSeller()).to.emit(
      contract,
      "RoleGranted"
    );
    const buyerRole = ethers.utils.solidityKeccak256(
      ["string"],
      ["BUYER_ROLE"]
    );

    expect(await contract.hasRole(buyerRole, seller.address)).to.eq(true);
    expect(await contract.hasRole(buyerRole, seller.address)).to.eq(true);

    await expect(contract.connect(user).becomeSeller()).to.be.reverted;

    await expect(
      contract.connect(seller).becomeSeller()
    ).to.be.revertedWithCustomError(contract, "AlreadyHasRole");
  });

  const registerFixture = async () => {
    const { contract, buyer, seller, user } = await loadFixture(deployFixture);
    await contract.connect(buyer).register("buyer");
    const sellerRegistration = await contract
      .connect(seller)
      .register("seller");
    await sellerRegistration.wait();
    const becomingSeller = await contract.connect(seller).becomeSeller();
    await becomingSeller.wait();
    return { contract, buyer, seller, user };
  };

  it("submitting commodity & removing from sale & restock", async () => {
    const { contract, buyer, seller } = await loadFixture(registerFixture);

    expect(
      await contract
        .connect(seller)
        .submitCommodity("test", "test", "test", 1, 10)
    ).to.emit(contract, "TransferSingle");

    expect(
      await contract
        .connect(seller)
        .submitCommodity("test2", "test2", "test2", 10, 100)
    ).to.emit(contract, "TransferSingle");

    expect(await contract.ownedItems(seller.address, 0, 1)).to.eq(10);
    expect(await contract.ownedItems(seller.address, 1, 1)).to.eq(100);

    await expect(
      contract.connect(buyer).submitCommodity("test3", "test3", "test3", 1, 1)
    ).to.be.reverted;

    await expect(contract.withdrawFromSale(0)).to.be.revertedWith(
      "not allowed to do this!"
    );
    await contract.connect(seller).withdrawFromSale(0);

    expect(await contract.ownedItems(seller.address, 0, 1)).to.eq(100);

    await expect(contract.connect(buyer).fillStock(1, 10)).to.be.reverted;

    expect(await contract.connect(seller).fillStock(1, 10)).to.emit(
      contract,
      "TransferSingle"
    );

    expect(await contract.ownedItems(seller.address, 0, 1)).to.eq(110);
  });

  it("buying", async () => {
    const { contract, buyer, seller, user } = await loadFixture(
      registerFixture
    );

    await contract
      .connect(seller)
      .submitCommodity(
        "test",
        "test",
        "test",
        ethers.utils.parseEther("1"),
        10
      );

    await contract
      .connect(seller)
      .submitCommodity(
        "test2",
        "test2",
        "test2",
        ethers.utils.parseEther("10"),
        100
      );

    const txToBuy0 = {
      value: ethers.utils.parseEther("3"),
    };

    const txToBuy1 = {
      value: ethers.utils.parseEther("100"),
    };

    const failureTX = {
      value: ethers.utils.parseEther("4"),
    };

    const failureTX1 = {
      value: ethers.utils.parseEther("20"),
    };

    expect(await ethers.provider.getStorageAt(contract.address, 6)).to.eq(
      ethers.utils.hexZeroPad(ethers.utils.hexlify(2), 32)
    );

    await expect(contract.connect(user).buy(0, 1, txToBuy0)).to.be.reverted;

    await expect(
      contract.connect(buyer).buy(0, 3, failureTX)
    ).to.be.revertedWith("wrong sum!");

    expect(await contract.connect(buyer).buy(0, 3, txToBuy0)).to.emit(
      contract,
      "TransferSingle"
    );

    expect(await contract.connect(buyer).buy(1, 10, txToBuy1)).to.emit(
      contract,
      "TransferSingle"
    );

    await expect(
      contract.connect(buyer).buy(0, 20, failureTX1)
    ).to.be.revertedWith("something went wrong!");

    expect(await contract.connect(buyer).buy(0, 3, txToBuy0)).to.emit(
      contract,
      "TransferSingle"
    );

    expect(await contract.ownedItems(buyer.address, 0, 1)).to.eq(6);
    expect(await contract.ownedItems(seller.address, 0, 1)).to.eq(4);

    await contract.connect(seller).withdrawFromSale(0);

    expect(await contract.ownedItems(buyer.address, 0, 1)).to.eq(6);
    expect(await contract.ownedItems(seller.address, 0, 1)).to.eq(90);
    await expect(contract.ownedItems(seller.address, 1, 1)).to.be.reverted;
  });

  it("supports interface", async () => {
    const { contract } = await loadFixture(deployFixture);

    expect(await contract.supportsInterface("0xd9b67a26")).to.eq(true);
  });
});

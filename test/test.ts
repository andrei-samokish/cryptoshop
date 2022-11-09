import { ethers } from "hardhat";
import { Signer } from "ethers";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { CryptoShop } from "../typechain-types";
import { expect } from "chai";

describe("Cryptoshop contract test", () => {
  async function deployFixture() {
    const Cryptoshop = await ethers.getContractFactory("CryptoShop");
    const [admin, buyer, seller, user] = await ethers.getSigners();
    const contract = await Cryptoshop.deploy();
    await contract.deployed();
    return { contract, buyer, seller, user };
  }

  const registerFixture = async () => {
    const { contract, buyer, seller, user } = await loadFixture(deployFixture);
    await contract.connect(buyer).register("buyer");
    const sellerRegistration = await contract
      .connect(seller)
      .register("seller");
    await sellerRegistration.wait();
    const becomingSeller = await contract.connect(seller).becomeSeller();
    await becomingSeller.wait();
    const creatingToken = await contract
      .connect(seller)
      .submitCommodity("test", "test", "test", 1, 10);
    await creatingToken.wait();
    return { contract, buyer, seller, user };
  };

  it("names do work", async () => {
    const { contract, buyer, user } = await loadFixture(deployFixture);
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
    const nameChange = await contract.connect(user).changeName("ubica228");
    expect(await contract.userNames(user.address)).to.eq("ubica228");
  });

  it("possible to become selelr", async () => {});
});

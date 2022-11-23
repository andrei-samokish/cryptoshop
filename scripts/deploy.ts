import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const CryptoShop = await ethers.getContractFactory("CryptoShop");
  const cryptoshop = await CryptoShop.deploy();

  console.log("Token address:", cryptoshop.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

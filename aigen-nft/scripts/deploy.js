const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts
  */
  const NAME = "Minti AI NFT"
  const SYMBOL = "MNTI"
  const COST = ethers.utils.parseUnits("0.01", "ether") // 0.01 ETH
  const NFT = await hre.ethers.getContractFactory("AiNFT")
  const nft = await NFT.deploy(NAME, SYMBOL, COST)
  await nft.deployed()

  // print the address of the deployed contract
  console.log("Minti AI NFT Contract Address:", nft.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
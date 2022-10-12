const hre = require("hardhat");

async function main() {
  const BunnyToken = await hre.ethers.getContractFactory("BunnyToken");
  const bunnyToken = await BunnyToken.deploy(100000000, 50);

  await bunnyToken.deployed();

  console.log("Bunny Token deployed: ", bunnyToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

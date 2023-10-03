const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("web3strorage");
  const upload = await Upload.deploy();

   await upload.waitForDeployment();

  console.log("Library deployed to:",await upload.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
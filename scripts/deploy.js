const hre = require("hardhat");

async function main() {
  const Notes = await hre.ethers.getContractFactory("Notes");
  const notes = await Notes.deploy();
  await notes.waitForDeployment();

  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;
  // const lockedAmount = hre.ethers.parseEther("0.001");
  // const lock = await hre.ethers.deployContract("Lock", [unlockTime], {value: lockedAmount});
  // await lock.waitForDeployment();

  console.log(`deployed to ${notes.target}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

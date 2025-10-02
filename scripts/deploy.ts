import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const FanCredentialVerifier = await ethers.getContractFactory("FanCredentialVerifier");
  const verifier = await FanCredentialVerifier.deploy(deployer.address); // Mock verifier address
  await verifier.deployed();
  console.log("FanCredentialVerifier deployed to:", verifier.address);

  const VerifiedFanTickets = await ethers.getContractFactory("VerifiedFanTickets");
  const tickets = await VerifiedFanTickets.deploy(verifier.address);
  await tickets.deployed();
  console.log("VerifiedFanTickets deployed to:", tickets.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
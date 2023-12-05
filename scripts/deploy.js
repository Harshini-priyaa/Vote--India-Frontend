const hre = require("hardhat")
const { items } = require("../src/items.json")

const tokens = (n) => {
  return hre.ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts
  const [deployer] = await hre.ethers.getSigners()

  // Deploy Dappazon
  const Dappazon = await hre.ethers.getContractFactory("Voting")
  const dappazon = await Dappazon.deploy()
  await dappazon.deployed()

  console.log(`Deployed voting Contract at: ${dappazon.address}\n`)
  const items = ["can1","can2","can3","can4","can5"]
  // Listing items...
    const transaction = await dappazon.connect(deployer).initializeCandidates(
      items
    )

    await transaction.wait()
    // items.map(async(i,index)=>{
    //   const candidates = await dappazon.connect(deployer).getCandidate(index)
    //   console.log(`Listed item ${candidates}`)
    // })
    

  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


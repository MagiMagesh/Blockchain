require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/veiJTEw4AGHWr7Cd1oNAIdJsicDsrLmw",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};







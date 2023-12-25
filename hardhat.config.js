require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/98f1f1753b6b429c953973e7f64ca50f`,
      accounts: [`0xee624a25f6a4884081083d1da2bea3f6847b5805f47dd1c035688acbab1fedd2`],
    }
  }
};

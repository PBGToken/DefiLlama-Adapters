const ADDRESSES = require('../helper/coreAssets.json')
const { nullAddress } = require("../helper/tokenMapping");
const { sumTokensExport } = require("../helper/unwrapLPs");

module.exports = {
    hallmarks: [
        [1714867303,"justin sun depo"]
      ],
    ethereum: {
        tvl: sumTokensExport({
            owners: ["0x38D43a6Cb8DA0E855A42fB6b0733A0498531d774"],
            tokens: [
                nullAddress,
                ADDRESSES.ethereum.WSTETH,
                "0x49446A0874197839D15395B908328a74ccc96Bc0",
                "0xE46a5E19B19711332e33F33c2DB3eA143e86Bc10",
                "0x49446A0874197839D15395B908328a74ccc96Bc0",
                "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0",
                "0xf951E335afb289353dc249e82926178EaC7DEd78",
                ADDRESSES.ethereum.WEETH,
                ADDRESSES.ethereum.WETH,
                "0x8a053350ca5F9352a16deD26ab333e2D251DAd7c",
                "0x8457CA5040ad67fdebbCC8EdCE889A335Bc0fbFB",
                "0x5cb12D56F5346a016DBBA8CA90635d82e6D1bcEa",
                ADDRESSES.linea.rzETH,
                "0x7122985656e38BDC0302Db86685bb972b145bD3C",
                "0xa0021EF8970104c2d008F38D92f115ad56a9B8e1",
                "0xc69Ad9baB1dEE23F4605a82b3354F8E40d1E5966",
                "0xC58aa33Ce619c7f7Ac4929DF357D0Ef762edbD23",
                "0x6ee2b5E19ECBa773a352E5B21415Dc419A700d1d",
                "0xac440d0eE23FA69632Aa731322C2a480dD1376e4",
                "0x330c4DD05dB16db6323505262C57CFdE5f0A78Ea",
                ADDRESSES.ethereum.USDe,
                ADDRESSES.ethereum.FRAX,
                "0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32",
                "0x5E8422345238F34275888049021821E8E08CAa1f",
                ADDRESSES.ethereum.sfrxETH,
                "0x18f313Fc6Afc9b5FD6f0908c1b3D476E3feA1DD9",
                "0xf7906F274c174A52d444175729E3fa98f9bde285"
            ]
        })
    }
}

import axios from 'axios';

const QUALIFYING_VOLUME = 150;

async function getCurrentEthereumPrice() {
  try {
    const res = await axios.get(
      `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_KEY}`
    );
    return parseFloat(res.data.result.ethusd);
  } catch (err) {
    console.log(err);
  }
}

async function getFloorPriceByAddress(collections, assets) {
  try {
    let totalFloorPrice = 0;
    let stats = [];
    collections
      .filter(
        (collection) =>
          collection.stats.seven_day_volume > QUALIFYING_VOLUME &&
          collection.stats.floor_price > 0
      )
      .forEach((collection) => {
        let collectionAssets = assets.filter(
          (asset) => asset.collection.name === collection.name
        );
        let multiplier = collectionAssets.length;
        let buyprice = 0;
        collectionAssets.forEach((asset) => {
          if (asset.last_sale) {
            buyprice += asset.last_sale.total_price / Math.pow(10, 18);
          }
        });
        let collectionStats = {
          name: collection.name,
          floor: collection.stats.floor_price,
          owned: multiplier,
          buyprice,
        };
        stats.push(collectionStats);
        totalFloorPrice += collection.stats.floor_price * multiplier;
      });
    return { floor: totalFloorPrice, stats };
  } catch (err) {
    console.log(err);
  }
}

async function getSummary(address) {
  const ethPriceUsd = await getCurrentEthereumPrice();
  const res1 = await axios.get(
    `https://api.opensea.io/api/v1/collections?asset_owner=${address}&offset=0&limit=300`
  );
  const res2 = await axios.get(
    `https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=50`
  );
  const summary = await getFloorPriceByAddress(res1.data, res2.data.assets);
  console.log(
    `Floor Gains for Projects w 7 Day Volume Above ${QUALIFYING_VOLUME} Ξ`
  );
  console.log(`=====================================================`);
  console.log('Total Floor: ', summary.floor);
  console.log('Total Floor in $: ', summary.floor * ethPriceUsd);
  summary.stats.forEach((collection) => {
    const gain =
      ((collection.floor * collection.owned - collection.buyprice) /
        collection.buyprice) *
      100;
    let percentPortfolio =
      ((collection.floor * collection.owned) / summary.floor) * 100;
    console.log(
      `${collection.name}: FLOOR: ${collection.floor.toFixed(3)} | # OWNED: ${
        collection.owned
      } | TOTAL BUY PRICE: ${collection.buyprice.toFixed(
        2
      )} Ξ | % GAIN IF SOLD: ${gain.toFixed(2)}% | SELL PRICE IN $: $${(
        collection.floor *
        collection.owned *
        ethPriceUsd
      ).toFixed(2)} | % OF TOTAL: ${percentPortfolio.toFixed(2)}%`
    );
  });
  return summary;
}

export default getSummary;

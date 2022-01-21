import { HttpService } from './HttpService.js';

const RESULTS_QUANTITY = 10;
const COINS_URL = 'https://api.coinpaprika.com/v1/coins';
const getSingleCoinUrl = coinId => `${COINS_URL}/${coinId}/ohlcv/latest`;

export const DataService = {
  async getCurrencies(query = { filter: '' }) {
    const { filter } = query;
    let data = await HttpService.setRequest(COINS_URL);

    data = data
      .filter(item => item.name.toLowerCase().includes(filter) && item.is_active)
      .slice(0, RESULTS_QUANTITY);

    return DataService.getCoinsPrice(data);
  },

  async getCoinsPrice(data) {
    const coinsPriceUrls = data.map(item => getSingleCoinUrl(item.id));
    const coins = await HttpService.setMultipleRequests(coinsPriceUrls);

    const fullData = data.map((item, index) => {
      item.price = coins[index][0].close;
      return item;
    });

    return fullData;
  }
};

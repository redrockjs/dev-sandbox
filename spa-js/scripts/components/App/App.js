import { Table } from '../Table/Table.js';
import { Filter } from '../Filter/Filter.js';
import { Portfolio } from '../Portfolio/Portfolio.js';
import { TradeWidget } from '../TradeWidget/TradeWidget.js';
import { DataService } from '../../services/DataService.js';

export class App {
  constructor({ element }) {
    this._el = element;
    this._userBalance = 10000;
    this._render();

    DataService.getCurrencies()
      .then(data => {
        this._data = data;
        this._initTable();
        this._initFilter();
      });

    this._initPortfolio();
    this._initTradeWidget();
  }

  _tradeItem(id) {
    const coin = this._data.find(coin => coin.id === id);
    this._tradeWidget.trade(coin);
  }

  _initTable() {
    this._table = new Table({
      data: this._data,
      element: this._el.querySelector('[data-element=table]'),
    });

    this._table.on('rowClick', e => this._tradeItem(e.detail));
  }

  _initFilter() {
    this._filter = new Filter({
      element: this._el.querySelector('[data-element=filter]'),
    });

    this._filter.on('filter', async e => {
      const filterValue = e.detail;
      const filteredData = await DataService.getCurrencies({ filter: filterValue });
      this._table.update(filteredData);
    });
  }

  _initPortfolio() {
    this._portfolio = new Portfolio({
      element: this._el.querySelector('[data-element="portfolio"]'),
      balance: this._userBalance,
    });
  }

  _initTradeWidget() {
    this._tradeWidget = new TradeWidget({
      element: this._el.querySelector('[data-element="trade-widget"]'),
      balance: this._userBalance,
    });

    this._tradeWidget.on('buy', e => {
      const { item, amount } = e.detail;
      const purchaseSum = item.price * amount;

      this._userBalance -= purchaseSum;
      this._tradeWidget.updateBalance(this._userBalance)
      this._portfolio.updateBalance(this._userBalance)
      this._portfolio.updatePortfolio(item, amount)
    });
  }

  _render() {
    this._el.innerHTML = `
      <div class="row">
        <div class="col s12">
          <h1>Tiny Crypto Market</h1>
        </div>
      </div>
      <div class="row">
        <div class="col s12" data-element="filter"></div>
      </div>
      <div class="row">
        <div class="col s12" data-element="table"></div>
      </div>
      <div class="col s6 offset-s6" data-element="portfolio"></div>
      <div data-element="trade-widget"></div>
    `;
  }
}

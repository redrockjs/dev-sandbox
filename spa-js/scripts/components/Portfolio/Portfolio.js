import { Component } from "../Component/Component.js";

export class Portfolio extends Component {
  constructor({ element, balance, items = {} }) {
    super();
    this._el = element;
    this._balance = balance;
    this._items = items;

    this._portfolioWorth = 0;
    this._render();
  }

  updatePortfolio({ id, name, price }, amount) {
    const currentItem = this._items[id] || {
      id,
      name,
      price,
      amount: 0,
      totalPrice: 0
    };

    currentItem.amount += amount;
    currentItem.totalPrice = currentItem.amount * currentItem.price;
    this._items[id] = currentItem;

    this._portfolioWorth = Object.values(this._items).reduce((acc, item) => acc + item.totalPrice, 0);
    this._render();
  }

  updateBalance(newBalance) {
    super.updateBalance(newBalance);
    this._render();
  }

  _render() {
    const items = Object.values(this._items);

    this._el.innerHTML = `
      <ul class="collapsible portfolio">
        <li>
          <p class="collapsible-header">
            Current balance: $${this._balance}.
            Portfolio Worth: $${this._portfolioWorth}
          </p>
          <div class="collapsible-body">
            <table class="highlight striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                ${items.map(item => `
                  <tr data-id='${item.id}'>
                    <td>${item.name}</td>
                    <td>${item.amount}</td>
                    <td>${item.price}</td>
                    <td>${item.totalPrice}</td>
                  </tr>
                `).join('')
                }
              </tbody>
            </table>
          </div>
        </li>
      </ul>
    `;
    let elems = this._el.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }
}

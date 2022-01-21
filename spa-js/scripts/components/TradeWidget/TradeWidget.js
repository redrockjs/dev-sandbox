import { Component } from '../Component/Component.js';

export class TradeWidget extends Component {
  constructor({ element, balance }) {
    super();
    this._el = element;
    this._balance = balance;

    this._el.addEventListener('keydown', e => {
      const { target, key } = e;

      if (!target.closest('#amount')) return;

      if (!isNumeric(key) && key !== 'Backspace' && key !== '.') {
        e.preventDefault();
      }
    });

    this._el.addEventListener('input', e => {
      const value = +e.target.value;
      this._updateDisplay(value);
    });

    this._el.addEventListener('click', e => this._buy(e));
  }

  trade(item) {
    this._currentItem = item;
    this._total = item.price * 0;

    this._render(item);
  }

  _updateDisplay(value) {
    this._totalEl = this._el.querySelector('#item-total');
    this._totalEl.textContent = this._currentItem.price * value;
  }

  _buy(e) {
    e.preventDefault();
    const target = e.target;

    if (!target.closest('.modal-close')) return;

    if (target.dataset.widget === 'cancel') {
      this.closeWidget();
      return;
    };

    const input = this._el.querySelector('#amount');

    if (target.dataset.widget === 'buy' && this._validateInput(input)) {
      const buyEvent = new CustomEvent('buy', {
        detail: {
          item: this._currentItem,
          amount: +input.value,
        }
      });

      this._el.dispatchEvent(buyEvent);
      this.closeWidget();
    }
  }

  _validateInput(input) {
    if (this._currentItem.price * input.value <= this._balance) return true;

    input.style.color = 'red';
    return false;
  }

  closeWidget() {
    this._el.querySelector('#modal').classList.remove('open');
  }

  _render(item) {
    this._el.innerHTML = `
      <div id="modal" class="modal open">
        <div class="modal-content">
          <h4>Buying ${item.name}:</h4>
          <p>
            Current price: ${item.price}. Total: <span id="item-total">${this._total}</span>
          </p>
          <div class="row">
            <form class="col s12">
              <div class="input-field col s4">
                <input id="amount" type="number">
                <label for="amount">Amount</label>
              </div>
            </form>
          </div>
        </div>

        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-teal btn-flat" data-widget="buy">Buy</a>
          <a href="#!" class="modal-close waves-effect waves-teal btn-flat" data-widget="cancel">Cancel</a>
        </div>
      </div>
    `;
    let elems = this._el.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }
}

function isNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

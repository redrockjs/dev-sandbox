export class Component {
  on(eventType, callback) {
    this._el.addEventListener(eventType, callback);
  }

  updateBalance(newBalance) {
    this._balance = newBalance;
  }
}

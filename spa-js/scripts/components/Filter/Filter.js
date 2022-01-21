import { Component } from '../Component/Component.js';

const FILTER_DELAY = 500;

export class Filter extends Component {
  constructor({ element }) {
    super();
    this._el = element;
    this._render();

    this._el.addEventListener('input', debounce(e => {
      const { value } = e.target;
      const filterEvent = new CustomEvent('filter', {
        detail: value.toLowerCase()
      });

      this._el.dispatchEvent(filterEvent);
    }, FILTER_DELAY));
  }

  _render() {
    this._el.innerHTML = `
      <div class="input-field col s4">
        <input type="text">
        <label>Filter by name</label>
      </div>
    `;
  }
}

function debounce(func, delay) {
  let timerId;

  return function wrapper(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => { func.apply(this, args); }, delay);
  }
}

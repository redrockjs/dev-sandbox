import Component from '../core/Component.js'

export default class Counter extends Component {
  template() {
    const { count } = this.$props
    return `
      <button class="plusBtn">+</button>
      <span>${count}</span>
      <button class="minusBtn">-</button>
    `
  }

  setEvent() {
    const { handleCount } = this.$props

    this.addEvent('click', '.plusBtn', (e) => {
      handleCount(Number(e.target.closest('li').dataset.key), 'plus')
    })

    this.addEvent('click', '.minusBtn', (e) => {
      handleCount(Number(e.target.closest('li').dataset.key), 'minus')
    })
  }
}

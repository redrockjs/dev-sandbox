import Component from '../core/Component.js'
import Counter from './Counter.js'

export default class Items extends Component {
  template() {
    const { items } = this.$props

    return `
      <ul>
        ${items
          .map(
            (item, idx) =>
              `<li data-key=${item.id}>${item.contents}
                <span data-component="counter" data-idx=${idx}></span>
                <button class="deleteBtn">삭제</button>
              </li>`
          )
          .join('')}
      </ul>
    `
  }

  mounted() {
    const $counters = this.getComponents('counter')
    const { items, handleCount } = this.$props
    $counters.forEach(($counter) => {
      new Counter($counter, { count: items[$counter.dataset.idx].count, handleCount })
    })
  }

  setEvent() {
    const { addItem, deleteItem } = this.$props

    this.addEvent('click', '.addBtn', (e) => {
      addItem()
    })

    this.addEvent('click', '.deleteBtn', (e) => {
      deleteItem(Number(e.target.closest('li').dataset.key))
    })
  }
}

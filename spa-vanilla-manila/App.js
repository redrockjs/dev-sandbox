import Component from './core/Component.js'
import Items from './components/Items.js'
import ItemAppender from './components/ItemAppender.js'

export default class App extends Component {
  setup() {
    this.$state = {
      isFilter: 0,
      items: [
        {
          id: 1,
          contents: 'item1',
          active: false,
          count: 0,
        },
        {
          id: 2,
          contents: 'item2',
          active: true,
          count: 0,
        },
      ],
    }
  }

  template() {
    return `
     <header data-component="item-appender"></header>
     <main data-component="items"></main>
     <footer data-component="item-filter"></footer>
    `
  }

  deleteItem(deleteId) {
    const { items } = this.$state
    this.setState({ items: items.filter(({ id }) => id !== deleteId) })
  }

  addItem(contents) {
    const { items } = this.$state
    this.setState({
      items: [...items, { id: items.length + 1, contents, active: false, count: 0 }],
    })
  }

  handleCount(itemId, action) {
    const { items } = this.$state
    const actionMapper = {
      plus: 1,
      minus: -1,
    }
    this.setState({
      items: items.map((item) => {
        if (item.id === itemId)
          return {
            ...item,
            count: item.count + actionMapper[action],
          }

        return item
      }),
    })
  }

  mounted() {
    const { items } = this.$state
    const { addItem, deleteItem, handleCount } = this

    const $itemAppender = this.getComponent('item-appender')
    const $items = this.getComponent('items')
    const $itemFilter = this.getComponent('item-filter')

    new ItemAppender($itemAppender, {
      addItem: addItem.bind(this),
    })

    new Items($items, {
      items,
      deleteItem: deleteItem.bind(this),
      handleCount: handleCount.bind(this),
    })
  }
}

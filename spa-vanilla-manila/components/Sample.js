import { render, p, div, button } from '../common/ui/index.js'

export default function Sample($target, props) {
  console.log($target)
  const { name, age } = props

  render($target, { count: 0 }, (state, setState) =>
    div(
      { className: 'Sample' },
      p({ className: 'cool' }, `Name:: ${name}`),
      p({ className: 'great' }, `Age:: ${age}`),
      p(
        { className: '' },
        `here is the count: ${state.count}`,
        button(
          {
            className: 'good',
            onClick: (e) => {
              e.stopPropagation()
              setState({ count: state.count + 1 }, e)
            },
          },
          'asd'
        )
      )
    )
  )
}

const render = ($target, initialState, createElement) => {
  const rerender = (element) => {
    const children = $target.children
    $target.append(element)
  }

  const setState = (state) => {
    rerender(createElement(state, setState))
  }

  setState(initialState)
}

export default render

export const span = ({ className = '' }, ...elements) => {
  const $span = document.createElement('span')
  $span.className = className
  $span.append(...elements)

  return $span
}

export const p = ({ className = '' }, ...elements) => {
  const $p = document.createElement('p')
  $p.className = className
  $p.append(...elements)

  return $p
}

export const div = ({ className = '' }, ...elements) => {
  const $div = document.createElement('div')
  $div.className = className
  $div.append(...elements)

  return $div
}

export const button = ({ className = '', onClick }, text) => {
  const $button = document.createElement('button')
  $button.className = className
  $button.append(text)
  $button.onclick = onClick

  return $button
}

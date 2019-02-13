export const closest = (target, selector) => {
  // closest(e.target, '.field')
  while (target) {
    if (target.matches && target.matches(selector)) return target
    target = target.parentNode
  }
  return null
}

export const getOffsetRect = (elem) => {
  var box = elem.getBoundingClientRect()

  return { top: Math.round(box.top), left: Math.round(box.left) }
}

export const getTransformProps = (x, y) => {
  return {
    transform: 'translate(' + x + 'px, ' + y + 'px)'
  }
}

export const listWithChildren = (list, childrenProp) => {
  return list.map(item => {
    return {
      ...item,
      [childrenProp]: item[childrenProp]
        ? listWithChildren(item[childrenProp], childrenProp)
        : []
    }
  })
}

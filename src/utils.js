export const closest = (target, selector) => {
  return target.closest(selector)
}

export const getOffsetRect = (elem) => {
  // (1)
  var box = elem.getBoundingClientRect()

  var body = document.body
  var docElem = document.documentElement

  // (2)
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft

  // (3)
  var clientTop = docElem.clientTop || body.clientTop || 0
  var clientLeft = docElem.clientLeft || body.clientLeft || 0

  // (4)
  var top = box.top + scrollTop - clientTop
  var left = box.left + scrollLeft - clientLeft

  return { top: Math.round(top), left: Math.round(left) }
}

export const getTotalScroll = (elem) => {
  let top = 0
  let left = 0

  while ((elem = elem.parentNode)) {
    top += elem.scrollTop || 0
    left += elem.scrollLeft || 0
  }

  return { top, left }
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

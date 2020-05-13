const bodyW = document.body.clientWidth
const bodyH = document.body.clientHeight
const _this = {
  hovering: false,
  dragging: false,
  isClick: false,
  startX: 0,
  currentX: 0,
  startY: 0,
  currentY: 0,
  startPosition: 0,
  newPosition: null,
  // 是否垂直方向
  vertical: false,
  before: null,
  after: null,
  beforeClass: '',
  afterClass: '',
  lineWidth: 0,
  lineHeight: 0,
  splitLine: null,
}
function setPosition(x, y) {
  const { lineWidth, lineHeight, vertical } = _this
  if (vertical) {
    calculationDom(y, lineHeight, bodyH, 'top', 'height')
  } else {
    calculationDom(x, lineWidth, bodyW, 'left', 'width')
  }
}
function calculationDom(spacing, line, documentSize, direction, geometric) {
  const { splitLine, before, after } = _this
  if (spacing <= line / 2) {
    before.style[geometric] = '0px'
    after.style[geometric] = `${documentSize - line / 2}px`
    splitLine.style[direction] = '0px'
  } else if (documentSize - line / 2 <= spacing) {
    before.style[geometric] = `${documentSize - line}px`
    after.style[geometric] = '0px'
    splitLine.style[direction] = `${documentSize - line}px`
  } else {
    before.style[geometric] = `${spacing}px`
    after.style[geometric] = `${documentSize - spacing - line / 2}px`
    splitLine.style[direction] = `${spacing - line / 2}px`
  }
}
function onButtonDown(event) {
  if (_this.disabled) return
  event.preventDefault()
  onDragStart(event)
  window.addEventListener('mousemove', onDragging)
  window.addEventListener('touchmove', onDragging)
  window.addEventListener('mouseup', onDragEnd)
  window.addEventListener('touchend', onDragEnd)
  window.addEventListener('contextmenu', onDragEnd)
}
function onDragStart(event) {
  _this.dragging = true
  _this.isClick = true
  if (event.type === 'touchstart') {
    event.clientY = event.touches[0].clientY
    event.clientX = event.touches[0].clientX
  }
  if (_this.vertical) {
    _this.startY = event.clientY
  } else {
    _this.startX = event.clientX
  }
  // _this.startPosition = parseFloat(_this.currentPosition)
  // _this.newPosition = _this.startPosition
}
function onDragging(event) {
  if (_this.dragging) {
    _this.isClick = false
    // var diff = 0
    if (event.type === 'touchmove') {
      event.clientY = event.touches[0].clientY
      event.clientX = event.touches[0].clientX
    }
    if (_this.vertical) {
      _this.currentY = event.clientY
      // diff = ((_this.startY - _this.currentY) / _this.$parent.sliderSize) * 100
    } else {
      _this.currentX = event.clientX
      // diff = ((_this.currentX - _this.startX) / _this.$parent.sliderSize) * 100
    }
    // _this.newPosition = _this.startPosition + diff
    setPosition(_this.currentX, _this.currentY)
  }
}
function onDragEnd() {
  if (_this.dragging) {
    /*
       * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
       * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
       */
    setTimeout(() => {
      _this.dragging = false
      // _this.hideTooltip()
      if (!_this.isClick) {
        // setPosition(_this.newPosition)
        setPosition(_this.currentX, _this.currentY)
      //   _this.$parent.emitChange()
      }
    }, 0)
    window.removeEventListener('mousemove', onDragging)
    window.removeEventListener('touchmove', onDragging)
    window.removeEventListener('mouseup', onDragEnd)
    window.removeEventListener('touchend', onDragEnd)
    window.removeEventListener('contextmenu', onDragEnd)
  }
}

export default {
  bind(el, { modifiers }) {
    const { vertical } = modifiers
    _this.splitLine = el
    _this.vertical = vertical
    el.addEventListener('mousedown', onButtonDown, false)
    el.addEventListener('touchstart', onButtonDown, false)
  },
  inserted(el, { value }) {
    _this.lineWidth = el.offsetWidth
    _this.lineHeight = el.offsetHeight
    const { beforeClass, afterClass } = value
    if (beforeClass && afterClass) {
      _this.before = document.querySelector(beforeClass)
      _this.after = document.querySelector(afterClass)
    }
  },
  update(el, { value }) {
    const { beforeClass, afterClass, before, after } = value
    if (!beforeClass || !afterClass) {
      _this.before = before
      _this.after = after
    }
  },
  unbind(el) {
    el.removeEventListener('mousedown', _this.onButtonDown, false)
    el.removeEventListener('touchstart', _this.onButtonDown, false)
  },
}

import './index.css';

// 右クリックの禁止

window.addEventListener('DOMContentLoaded', function(){
    var images = document.images
    var cancelContextMenu = function(e){
        e.preventDefault()
    };
    Array.prototype.forEach.call(images, function (elm) {
        elm.addEventListener('contextmenu', cancelContextMenu)
    })
})

// ドラッグの禁止

window.addEventListener('DOMContentLoaded', function(){
    var images = document.images
    var cancelEvent = function(e){
      e.preventDefault()
    };
    Array.prototype.forEach.call(images, function (elm) {
      elm.addEventListener('contextmenu', cancelEvent)
      elm.addEventListener('dragstart', cancelEvent)
    })
})

// 画像のURLがわからないようにする

window.addEventListener('DOMContentLoaded', function(){
    var images = document.querySelectorAll('img[data-img-index]')
    var imagePath = {
        'img1': './logo192.png',
    }
    var cancelEvent = function (e) {
      e.preventDefault()
    }
    Array.prototype.forEach.call(images, function (elm) {
      const attr = elm.getAttribute('data-img-index')
      elm.src = imagePath[attr]
      elm.onload = function (e) {
        const canvas = document.createElement('canvas')
        const imageStyle = document.defaultView.getComputedStyle(elm, '')
        const ctx = canvas.getContext('2d')
        const imageWidth = imageStyle.width.replace(/px$/i, '')
        const imageHeight = imageStyle.height.replace(/px$/i, '')
        canvas.width = imageWidth
        canvas.height = imageHeight
        ctx.drawImage(elm, 0, 0, imageWidth, imageHeight)
        ctx.scale(0.5, 0.5)
        elm.parentElement.insertBefore(canvas, elm)
        elm.parentElement.removeChild(elm)
        canvas.addEventListener('contextmenu', cancelEvent)
        canvas.addEventListener('dragstart', cancelEvent)
      }
    })
  })

// スクリーンショットの防止

var addOverlay = function () {
if (!document.body.classList.contains('ov')) {
    document.body.classList.add('ov')
}
}
var removeOverlay = function () {
if (document.body.classList.contains('ov')) {
    setTimeout(function () {
    document.body.classList.remove('ov')
    }, 300)
}
}
var overlay = function () {
    addOverlay()
    removeOverlay()
}
var keyevent = function (e) {
if (e.keyCode === 44) {
    overlay()
}
if (e.metaKey && e.shiftKey){
    addOverlay()
} else if ( !e.metaKey || !e.shiftKey ) {
    removeOverlay()
}
}
window.addEventListener('keydown', keyevent)
window.addEventListener('keyup', keyevent)
window.addEventListener('blur', addOverlay)
window.addEventListener('focus', removeOverlay)
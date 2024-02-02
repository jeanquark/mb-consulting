window.addEventListener('unload', function (e) {
    console.log('unload')
    var wrapper = document.getElementById('wrapper')
    var previousScroll = wrapper.scrollTop
    window.localStorage.setItem('previousScroll', previousScroll)
})
document.addEventListener('DOMContentLoaded', function (e) {
    console.log('DOMContentLoaded')
    var wrapper = document.getElementById('wrapper')
    var previousScroll = window.localStorage.getItem('previousScroll')
    wrapper.scrollTop = previousScroll
})

const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', documentHeight)
documentHeight()
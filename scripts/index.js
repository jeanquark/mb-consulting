// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
const wrapper = document.getElementById('wrapper')
wrapper.onscroll = function () {
    // scrollFunction()
}

function scrollFunction() {
    console.log('scrollFunction()');
    // console.log('wrapper.scrollTop: ', wrapper.scrollTop);
    // if (wrapper.scrollTop > 80) {
    //     document.getElementById('navbar-mobile').style.padding = '8px 10px'
    // } else {
    //     document.getElementById('navbar-mobile').style.padding = '35px 10px'
    // }
    // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //     document.getElementById('navbar-mobile').style.padding = '8px 10px'
    //     document.getElementById('logo').style.fontSize = '25px'
    // } else {
    //     document.getElementById('navbar-mobile').style.padding = '35px 10px'
    //     document.getElementById('logo').style.fontSize = '35px'
    // }
}

/*
    Toggle hamburger menu on mobile
*/
function toggleNavigationMenu() {
    console.log('toggleNavigationMenu')
    var x = document.getElementById('navItemsMobile')
    if (x.style.opacity == 1) {
        x.style.maxHeight = 0
        x.style.transition = 'max-height 1s ease-out'
        x.style.overflow = 'hidden'
        document.getElementById('services').style.marginTop = '0px'
        setTimeout(() => {
            x.style.opacity = 0
            x.style.transform = 'translateY(-100%)'
            x.style.visibility = 'hidden'
        }, 1000)
    } else {
        document.getElementById('navbarMobile').style.backgroundColor = 'rgba(255, 255, 255, 1)'
        x.style.opacity = 1
        x.style.maxHeight = '500px'
        x.style.transform = 'translateY(0%)'
        x.style.visibility = 'visible'
        x.style.transition = 'max-height 1s ease-in, opacity 1.5s ease-in'
    }
}






// function doTheThing (el) {
//     el.classList.add('active');
// }

// const threshold = 0.5;

// document.querySelectorAll('section').forEach(el => {
//     const elHeight = el.getBoundingClientRect().height;
//     var th = threshold;

//     // The element is too tall to ever hit the threshold - change threshold
//     if (elHeight > (window.innerHeight * threshold)) {
//         th = ((window.innerHeight * threshold) / elHeight) * threshold;
//     }

//     new IntersectionObserver(iEls => iEls.forEach(iEl => doTheThing(iEl)), {threshold: th}).observe(el);
// });
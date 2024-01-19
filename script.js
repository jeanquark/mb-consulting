// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
const wrapper = document.getElementById('wrapper')
wrapper.onscroll = function () {
    scrollFunction()
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
    var x = document.getElementById('nav-items-mobile')
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
        x.style.transition = 'max-height 1.5s ease-in, opacity 1.5s ease-in'
    }
}

/* 
Toggle active class on scroll 
*/
const sections = document.querySelectorAll("section")
const navItems = document.querySelectorAll(".nav-item")

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: .5,
};

function observerCallback(entries, observer) {
    // console.log('observer: ', observer);
    entries.forEach((entry) => {
        // console.log('entry: ', entry);
        if (entry.isIntersecting) {
            let sectionId = entry.target.id
            if (sectionId === 'about') {
                // Shrink navbar
                // document.getElementById('navbar-mobile').style.padding = '8px 10px'
                // document.getElementById('wrapper').style.scrollPaddingTop = '70px'
                document.getElementById('logoMobileNavbar').style.fontSize = '16px'
                document.getElementById('navbarMobile').style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
            }
            if (sectionId === 'services') {
                // Expand navbar
                // document.getElementById('navbar-mobile').style.padding = '35px 10px'
                // document.getElementById('wrapper').style.scrollPaddingTop = '115px'
                // document.getElementById('logo').style.fontSize = '35px'
                document.getElementById('logoMobileNavbar').style.fontSize = '20px'
                document.getElementById('navbarMobile').style.backgroundColor = 'rgba(255, 255, 255, 1)'
            }

            // Hide nav items
            var x = document.getElementById('nav-items-mobile')
            x.style.maxHeight = 0
            x.style.opacity = 0
            x.style.transform = 'translateY(-100%)'
            x.style.visibility = 'hidden'
            x.style.overflow = 'hidden'
            x.style.transition = 'none'

            navItems.forEach((elem) => {
                elem.children[0].getAttribute("href")
                if (`#${sectionId}` === elem.children[0].getAttribute("href")) {
                    elem.classList.add('active')
                } else {
                    elem.classList.remove('active')
                }
            });
        }
    });
}
const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((section) => observer.observe(section));
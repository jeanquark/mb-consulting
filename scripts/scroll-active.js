/* 
Toggle active class on scroll 
*/
const sections = document.querySelectorAll("section")
// const navItems = document.querySelectorAll(".nav-item")
const navItems = document.querySelectorAll("#navItems > li")

const observerOptions = {
    // root: null,
    root: document.querySelector("#wrapper"),
    // root: '#wrapper',
    rootMargin: '0px',
    // threshold: .5,
    // threshold: 0.5, // The threshold of 1 means that our callback will trigger when the video is fully visible, or it stops being fully visible
    threshold: 0.5,
    // threshold: [0, 1]
};

function observerCallback(entries) {
    console.log('observerCallback entries: ', entries);
    entries.forEach((entry) => {
        // console.log('entry: ', entry);
        const elHeight = entry.boundingClientRect.height;
        // console.log('elHeight: ', elHeight);
        // console.log('window.innerHeight: ', window.innerHeight);
        if (entry.isIntersecting) {
            let sectionId = entry.target.id
            console.log('sectionId: ', sectionId);
            if (sectionId === 'services') {
                // Shrink navbar
                // document.getElementById('logoMobileNavbar').style.fontSize = '16px'
                // document.getElementById('navbarMobile').style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
            }
            if (sectionId === 'header') {
                // Expand navbar
                // document.getElementById('logoMobileNavbar').style.fontSize = '20px'
                // document.getElementById('navbarMobile').style.backgroundColor = 'rgba(255, 255, 255, 1)'
            }

            // Hide nav items
            var x = document.getElementById('navItemsMobile')
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
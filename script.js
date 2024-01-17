/* 
    Navbar resize on scroll
    When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
*/
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    console.log('scrollFunction')

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "60px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}

/*
    Toggle hamburger menu on mobile
*/
function toggleNavigationMenu() {
    console.log('toggleNavigationMenu');
    var x = document.getElementById("navbar-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
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
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let sectionId = entry.target.id
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

sections.forEach((sec) => observer.observe(sec));


/*
    Miscellaneous
*/
window.addEventListener('scroll', function () {
    console.log('scrolling');
});
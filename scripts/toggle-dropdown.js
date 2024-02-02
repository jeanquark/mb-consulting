/* When the user clicks on the button, toggle between hiding and showing the dropdown content */

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    // console.log('onclick e: ', e)
    if (!e.target.matches('.dropBtnTarget')) {
        var myDropdown = document.getElementById('myDropdown')
        // console.log('myDropdown: ', myDropdown);
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show')
        }
    }
}

function toggleDropdown() {
    console.log('toggleDropdown')
    // return
    console.log('document.getElementById("myDropdown").classList: ', document.getElementById('myDropdown').classList)
    document.getElementById('myDropdown').classList.toggle('show')
}

function toggleDropdownMobile() {
    console.log('toggleDropdownMobile')
    console.log('document.getElementById("dropdownMobile").classList: ', document.getElementById('dropdownMobile').classList)
    document.getElementById('dropdownMobile').classList.toggle('show-dropdown-content-mobile')
}
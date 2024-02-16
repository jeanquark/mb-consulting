function toggleDropdown() {
    console.log('toggleDropdown')
    document.getElementById('myDropdown').classList.toggle('show')
}

function toggleDropdownMobile() {
    console.log('toggleDropdownMobile2')
    console.log('document.getElementById("dropdownMobile").classList: ', document.getElementById('dropdownMobile').classList)
    document.getElementById('dropdownMobile').classList.toggle('show-dropdown-content-mobile')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropDownTarget')) {
        var myDropdown = document.getElementById('myDropdown')
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show')
        }
    }
}
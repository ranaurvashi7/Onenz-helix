let dropdownNavigationItems = document.querySelectorAll("li.DropdownNavigation-items-item")


for (let i = 0; i < dropdownNavigationItems.length; i++) {
    dropdownNavigationItems[i].addEventListener('mouseover', function(event) {
        event.preventDefault()
        let selectDiv = this.querySelector(".DropdownNavigationItem")
        selectDiv.setAttribute('data-item-hover','true');
    });
    dropdownNavigationItems[i].addEventListener('mouseout', function(event) {
        event.preventDefault()
        let selectDiv = this.querySelector(".DropdownNavigationItem")
        selectDiv.removeAttribute('data-item-hover','true');
    });
}

let dropdownNavigationItemItems = document.querySelectorAll("li.DropdownNavigationItem-items-item")


for (let i = 0; i < dropdownNavigationItemItems.length; i++) {
    dropdownNavigationItemItems[i].addEventListener('mouseover', function(event) {
        event.preventDefault()
        let selectDiv = this.querySelector(".NavigationLink-wrapper")
        selectDiv.setAttribute('data-item-hover','true');
    });
    dropdownNavigationItemItems[i].addEventListener('mouseout', function(event) {
        event.preventDefault()
        let selectDiv = this.querySelector(".NavigationLink-wrapper")
        selectDiv.removeAttribute('data-item-hover','true');
    });
}



let searchIcon = document.querySelector("a.Page-header-search-button .icon-magnify")
searchIcon.addEventListener("click",function(event){
    let body = document.querySelector("body")
    body.setAttribute("data-toggle-header","search-overlay")
})
let closeIcon = document.querySelector("a.Page-header-search-button .close-x")
closeIcon.addEventListener("click",function(event){
    let body = document.querySelector("body")
    body.removeAttribute("data-toggle-header","search-overlay")
})


let dropdownNavigationItems = document.querySelectorAll("li.DropdownNavigation-items-item")
console.log(dropdownNavigationItems)


for (var i = 0; i < dropdownNavigationItems.length; i++) {
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
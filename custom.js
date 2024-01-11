function handleNavItemClick() {
    var tabsNav = document.querySelectorAll('.services-tabs-nav a');

    tabsNav.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            let target_element = e.target;
            if (target_element.tagName === "SPAN" || target_element.tagName === "I") {
                target_element = target_element.parentElement;
            }
            let type = target_element.dataset.navType;
            let icon_selector = "."+type+"-icon";
            let info_selector = "."+type+"-info";

            document.querySelectorAll(".services-tabs-text").forEach(e => {
                e.classList.remove("active")
            })
            
            document.querySelectorAll(".services-tabs-icon").forEach(e => {
                e.classList.remove("active")
            })

            document.querySelectorAll(".services-tabs-nav li").forEach(e => {
                e.classList.remove("active")
            })

            target_element.closest("li").classList.add("active");

            let icon = document.querySelector(icon_selector);
            let info = document.querySelector(info_selector);
            icon.classList.add("active");
            info.classList.add("active");
        })
    })
}

handleNavItemClick();

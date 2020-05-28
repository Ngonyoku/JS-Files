let sideBarStatus = false;

let sideBarControl = function() {
    let getSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    let getSideBarLinks = document.querySelectorAll(".nav-sidebar ul li a");

    if (sideBarStatus === false) {
        getSideBarUl.style.visibility = "visible";
        getSideBar.style.width = "250px";

        for (let i = 0; i < getSideBarLinks.length; i++) {
            getSideBarLinks[i].style.opacity = "1";
        }

        sideBarStatus = true;
    } else if (sideBarStatus === true) {
        getSideBar.style.width = "50px";

        for (let i = 0; i < getSideBarLinks.length; i++) {
            getSideBarLinks[i].style.opacity = "0";
        }

        getSideBarUl.style.visibility = "hidden";
        sideBarStatus = false;
    }
}
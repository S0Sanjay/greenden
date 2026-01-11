var body = document.documentElement;
var themeBtn = document.getElementById("themeToggle");

if(localStorage.getItem("mode") == "dark") {
    body.classList.add("dark");
}

if(themeBtn) {
    themeBtn.onclick = function() {
        if(body.classList.contains("dark")) {
            body.classList.remove("dark");
            localStorage.setItem("mode", "light");
        } else {
            body.classList.add("dark");
            localStorage.setItem("mode", "dark");
        }
    }
}

var menuBtn = document.getElementById("menuBtn");
var mobileMenu = document.getElementById("mobileMenu");
var closeBtn = document.getElementById("closeBtn");

if(menuBtn && mobileMenu && closeBtn) {
    menuBtn.onclick = function() {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");  
    }
    
    closeBtn.onclick = function() {
        mobileMenu.classList.remove("flex");
        mobileMenu.classList.add("hidden"); 
    }
}


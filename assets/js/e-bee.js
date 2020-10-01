var btnTop = document.getElementById("toTopBtn")

window.onscroll = function() {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
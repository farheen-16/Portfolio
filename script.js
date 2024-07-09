document.addEventListener('DOMContentLoaded', function () {
    var typed1 = new Typed(".mytext", {
        strings: ["a Web Developer", "in my Second year of Engineering", "also a Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

function showportfoliopage() {
    window.location.href = "portfolio.html";
}

function showaboutpage() {
    window.location.href = "about.html";
}

function showaccomppage() {
    window.location.href = "achievements.html";
}

function showcontactpage() {
    window.location.href = "contact.html";
}


function github() {
    window.open("https://github.com/farheen-16", '_blank', 'noopener noreferrer');
}

function linkedin() {
    window.open("linkedin.com/in/farheen-khan-b9561a243", '_blank', 'noopener noreferrer');
}

function instagram() {
    window.open("https://www.instagram.com/?hl=en", '_blank', 'noopener noreferrer');
}
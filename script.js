let currentSlide = 0; 

function moveSlide(direction) {
    let slides = document.querySelectorAll('.carousel-slide');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; 
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; 
    }

    const slidesContainer = document.querySelector('.carousel-slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`; 
}

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".card");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active")); 
            this.classList.add("active");
        });
    });
});


function openContent(evt, contentName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("card-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("card");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("default").style.display = "none";

    document.getElementById(contentName).style.display = "block";
    if (contentName === "projects") {
        document.getElementById("carousel").style.display = "block";
    } else {
        document.getElementById("carousel").style.display = "none";
    }
    evt.currentTarget.className += " active";
}


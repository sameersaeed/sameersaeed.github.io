const switchBox = document.querySelector(".dark-light-toggle");

document.querySelector("input").addEventListener("change", (e) => {
    const { checked } = e.target;   
    if (checked) {
        switchBox.classList.add("move");
    } else {
        switchBox.classList.remove("move");
    }
});

function toggleLightMode() {
    var element = document.body;
    var solid = document.querySelectorAll(".fa-solid");
    var brands = document.querySelectorAll(".fa-brands");

    element.classList.toggle("light-mode");
    for(var i=0; i<solid.length; i++){
        solid[i].classList.toggle("light-mode");
    }
    for(var i=0; i<brands.length; i++){
        brands[i].classList.toggle("light-mode");
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
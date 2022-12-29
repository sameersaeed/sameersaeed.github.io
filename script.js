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
    var bordSkills = document.querySelectorAll(".col-sm");
    var bordProjs = document.querySelectorAll(".card-body");
    var bordFooter = document.querySelector("footer");

    element.classList.toggle("light-mode");
    for(var i=0; i<solid.length; i++){
        solid[i].classList.toggle("light-mode");
    }
    for(var i=0; i<brands.length; i++){
        brands[i].classList.toggle("light-mode");
    }
    for(var i=0; i<bordSkills.length; i++){
        bordSkills[i].classList.toggle("light-mode");
    }
    for(var i=0; i<bordProjs.length; i++){
        bordProjs[i].classList.toggle("light-mode");
    }
    bordFooter.classList.toggle("light-mode");

}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var $bars = $(".bar");
 $bars.eq(0).animate({width: "80%"}, 2500);   // js
 $bars.eq(1).animate({width: "95%"}, 2500);   // java
 $bars.eq(2).animate({width: "70%"}, 2500);   // c
 $bars.eq(3).animate({width: "85%"}, 2500);   // c++
 $bars.eq(4).animate({width: "90%"}, 2500);   // python
 $bars.eq(5).animate({width: "70%"}, 2500);   // golang
 $bars.eq(6).animate({width: "65%"}, 2500);   // .net
 $bars.eq(7).animate({width: "50%"}, 2500);   // angular
 $bars.eq(8).animate({width: "60%"}, 2500);   // react
 $bars.eq(9).animate({width: "75%"}, 2500);   // microsoft sql server
 $bars.eq(10).animate({width: "80%"}, 2500);  // mysql
 $bars.eq(11).animate({width: "80%"}, 2500);  // mongodb
 $bars.eq(12).animate({width: "65%"}, 2500);  // postgresql
 $bars.eq(13).animate({width: "70%"}, 2500);  // aws
 $bars.eq(14).animate({width: "60%"}, 2500);  // azure
 $bars.eq(15).animate({width: "80%"}, 2500);  // git
 $bars.eq(16).animate({width: "60%"}, 2500);  // selenium
 $bars.eq(17).animate({width: "40%"}, 2500);  // jasmine
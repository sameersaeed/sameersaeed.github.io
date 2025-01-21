document.addEventListener("DOMContentLoaded", function () {
    const resumeLink = document.getElementById("resume-link");  
    const resumeView = document.getElementById("resume-view");
    const backButton = document.getElementById("back-button");

    resumeLink.addEventListener("click", function () {
        document.querySelector("main").classList.add("hidden");
        resumeView.classList.remove("hidden");
    });

    backButton.addEventListener("click", function () {
        resumeView.classList.add("hidden");
        document.querySelector("main").classList.remove("hidden");
    });
});

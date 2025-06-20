// Get The Button
let mybutton = document.getElementById("scrollToTopBtn");
//When the userscrolls down 20px from the top of the document, show the button
window.onscroll = function () {scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // Fpr Chrome, Firefox, IE and Opera
}
// Function to handle active class on click
document.querySelectorAll(".navbar-nav li a").forEach((link) => {
    link.addEventListener("click", (e) => {
        //Remove active class from the current active link
        document.querySelector(".navbar-nav .Active").classList.remove("Active");
        //Add active class to the clicked link 
        e.target.classList.add("Active");
    });
});

//Function to handle active class based on scroll position
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section") // Adjust the selector to your sections
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
        let sectionTop = sections.offsetTop - 50; //Adjust offset if necessary
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute("id");

        //Check if the section is in view 
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from the current active link
            document.querySelector(".navbar-nav .Active").classList.remove("Active");
            //Add active class to the corresponding navbar link
            document.querySelector(`.navbar-nav li a[href=${sectionId}`).classList.add("Active");
        }
    });
});

// Make A Foreach Loop To Display Menu Price

$(document).ready(function () {
    //Initially hide all menu content
    $("menu-content p").hide(500);
    //Toggle the menu content when the image is clicked
    $(".menuImage img").click(function () {
        //Get the corresponding menu-content of the clicked image 
        $(this).Closest(".menu").find(".menu-content p").slideToggle(500);
    });
});
//Make All Menu Price Display from One click
$("shoeMenu").click(function() {
    $(".menu-content p").slideToggle(500);
})
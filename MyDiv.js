var rectOne;
var rectTwo;
var clickOnce = false;

document.addEventListener("DOMContentLoaded", function () {
    rectOne = document.querySelector(".long-rect");
    rectTwo = document.querySelector(".short-rect");

    rectOne.addEventListener("mouseover", function () {
            rectTwo.innerHTML = ("This has changed");

        if (clickOnce === false) {
            rectTwo.addEventListener("click", function () {
                alert("Clicked");
            });

            clickOnce = true;
        }
    }); 
    
        rectOne.addEventListener("mouseout", function () {
        console.log("out");

        rectTwo.innerHTML = "Update the status of this box. This box should not be clickable at this point.";
    });

});
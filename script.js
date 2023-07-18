let three = document.querySelector(".three")
let four = document.querySelector(".four")
let salary = document.querySelector("#salary")
let salary2 = document.querySelector("#salary2")


// if(three.style.backgroundColor == "hsla(186, 34%, 60%, 0.582)") {

// }
    three.onmouseover= function() {
        salary.style.display = "block";
        this.onmouseleave = function() {
            salary.style.display = "none";
        }
    }
    four.onmouseover= function() {
        salary2.style.display = "block";
        this.onmouseleave = function() {
            salary2.style.display = "none";
        }
    }

    
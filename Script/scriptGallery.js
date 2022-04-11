
// Get the elements with class="column"
    var elements = document.getElementsByClassName("column");
    var elements2 = document.getElementsByClassName("img");
// Declare a "loop" variable
    var i;

// Full-width images
    function one() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "row";
        }
        for (i = 0; i < elements2.length; i++) {
            elements2[i].style.width = "24vw"
        }
    }

// Two images side by side
    function two() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "column";
        }
        for (i = 0; i < elements2.length; i++) {
            elements2[i].style.width = "100vw"
        }
        console.log(elements2)
    }

let p = document.getElementById("p1");

p.addEventListener("click", function(){
    if (p.style.textAlign === "left"){
        p.style.textaling = "center";
    } else {
        p.style.textaling = "left"
    }
})
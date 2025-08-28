let h2 = document.getElementById("title");

h2.addEventListener("pointerdown", function (e) {
    if (e.target.style.fontSize === "20px") {
        e.target.style.fontSize = "30px";
    } else {
        e.target.style.fontSize = "20px";
    }
});

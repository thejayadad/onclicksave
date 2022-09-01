
let btn = document.querySelector(".btn");

btn.onclick = function() {
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML = "Saved!";
        this.style = "background: lightgreen; color: white; pointer-events: none";
    }, 2000);
}
const bodyBcg = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener("click",function(){
    var color = ["green","Purple","Pink","brown","aqua","aquamarine","grey"];

    let random = Math.floor(Math.random()*color.length);

    bodyBcg.style.backgroundColor = color[random];
});
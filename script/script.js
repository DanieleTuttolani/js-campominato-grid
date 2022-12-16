const grid = document.getElementById("griglia");
const btn = document.getElementById("wantPlay");
const cell = document.getElementsByClassName("cell");

//al click...
let newCell;
btn.addEventListener("click", function() {
    for(let i = 1 ; i <= 100 ; i++){
       newCell= document.createElement("div")
       newCell.classList.add("cell");
       newCell.append(i)
       grid.appendChild(newCell);
        
    }
    
})
cell.addEventListener("click", function(){
    console.log("ok")
})
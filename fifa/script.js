const slots = [
    {x:380, y:230},
    {x:530, y:225},
    {x:650, y:210},
    {x:780, y:230},
    {x:917, y:200},
    {x:1030, y:230},
    {x:1160, y:208},
    {x:1330, y:210},
    {x:1425, y:225}
]

let current_pos = 0

const indicator = document.querySelector(".indicator")

function moveIndicator(){
    indicator.style.left = slots[current_pos].x + "px"
    indicator.style.top = slots[current_pos].y + "px"
}

document.addEventListener("keydown",(e) =>{

    if(e.key === "ArrowRight") {
        current_pos ++
        if(current_pos >= slots.length ) current_pos = 0
        moveIndicator()
    }

    if(e.key === "ArrowLeft") {
        current_pos --
        if(current_pos < 0) current_pos = slots.length -1
        moveIndicator()
    }

})
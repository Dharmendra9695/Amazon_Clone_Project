const slider = document.querySelector(".slider");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = slider.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;
//add event listeners for the arrow buttons to scroll the slider left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        slider.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
      })
})

const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    //Records the initial cursur and scroll position of the slider
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return  //if isDragging is false return hera
    //update the scroll position of the slider based on the cursor movement
    slider.scrollLeft= startScrollLeft - (e.pageX - startX ) ;
}


const dragStop = () =>{
    isDragging = false;
    slider.classList.remove("dragging");
}
slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
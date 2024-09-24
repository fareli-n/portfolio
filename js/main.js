'use strict'
const collapsible = document.querySelectorAll('.collapsible')
collapsible.forEach (element => {
    element.addEventListener('click' , toggle)
})
function toggle(){
    this.classList.toggle("collapsible--expanded");
}
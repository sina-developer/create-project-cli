import global from "./global";
import events from "./events";

let element = document;
if(global.canvas_events){
    element = document.getElementById(global.canvas_id);
}

element.addEventListener("mousemove" , (e) => {
    global.mouseX = e.clientX;
    global.mouseY = e.clientY;
    events.mousemove(global.mouseX , global.mouseY);
})

element.addEventListener("click" , (e) => {
    global.mouseX = e.clientX;
    global.mouseY = e.clientY;
    events.mouseclick(global.mouseX , global.mouseY);
})

element.addEventListener("mousedown" , (e) => {
    global.mouseX = e.clientX;
    global.mouseY = e.clientY;
    events.mousedown(global.mouseX , global.mouseY);
})

element.addEventListener("mouseup" , (e) => {
    global.mouseX = e.clientX;
    global.mouseY = e.clientY;
    events.mouseup(global.mouseX , global.mouseY);
})

element.addEventListener("keypress" , (e) => {
    events.keypress(e.keyCode);
})

element.addEventListener("keyup" , (e) => {
    events.keyup(e.keyCode);
})

element.addEventListener("keydown" , (e) => {
    events.keydown(e.keyCode);
})
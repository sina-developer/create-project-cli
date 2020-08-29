import global from "./global";
import animator from "./animator";
import events from "./events";
import "./events_trigger";

export default function(){
    let canvas = document.createElement("canvas");
    canvas.setAttribute("id" , global.canvas_id);
    canvas.width = global.width;
    canvas.height = global.height;
    let ctx = canvas.getContext("2d");
    global.ctx = ctx;
    events.start(ctx);
    if(global.animate){
        animator(ctx , events.update );
    }
    return canvas;
}
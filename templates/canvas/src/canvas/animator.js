import global from "./global";
export default function(ctx , update){
    setInterval(()=>{
        update(ctx);
    } , 1000 / global.fps)
}
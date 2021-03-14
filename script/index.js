const io = require("socket.io-client");
const socket = io("http://localhost:3000", {
    reconnectionDelayMax: 10000,
    transport : ['websocket']
});
console.log(socket.id)
socket.on("connection",()=>{
    console.log(socket.connected)});
document.onkeyup = () => checkSpeed();

let iLastTime = 0;
let iTime = 0;
let iTotal = 0;
let iKeys = 0;

let timer;
let CPM = 0;

async function checkSpeed() {
    iTime = new Date().getTime();


    if (iLastTime !== 0) {
        iKeys++;
        iTotal += iTime - iLastTime;

        CPM = Math.round(iKeys / iTotal * 6000, 2);
        localStorage.setItem("CPM", CPM.toString());//todo либо запрос, либо socket
        socket.emit("")
    }

    iLastTime = iTime;
    clearInterval(timer);


    timer = setTimeout(function () {
        autosaving();
    }, 5 * 1000);

    async function autosaving() {

        iLastTime = 0;
        iTime = 0;
        iTotal = 0;
        iKeys = 0;


        localStorage.setItem("CPM", "0");


    }
}
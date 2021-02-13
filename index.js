$(document).keyup(checkSpeed);

let iLastTime = 0;
let iTime = 0;
let iTotal = 0;
let iKeys = 0;

let timer;
let CPM=0;
async function checkSpeed() {
    iTime = new Date().getTime();


    if (iLastTime != 0) {
       iKeys++;
       iTotal += iTime - iLastTime;

       CPM = Math.round(iKeys / iTotal * 6000, 2);
       await localStorage.setItem("CPM",CPM.toString());
    }

    iLastTime = iTime;
    clearInterval(timer);


     timer = setTimeout(function() {
         autosaving();
    }, 10 * 1000);

   async function autosaving() {

         iLastTime = 0;
         iTime = 0;
         iTotal = 0;
         iKeys = 0;

       await localStorage.setItem("CPM","0");
    }
}
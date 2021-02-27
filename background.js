

let div = document.createElement('div');
div.className = "lamp";


div.style.width = "50px";
div.style.height = "50px";
div.style.background = "black";
div.style.zIndex = "100";
div.style.position = "fixed";
div.style.right = "15px";
div.style.bottom= "30px";
div.style.transition ="all 1s";


setInterval(async function() {


    let x =await localStorage.getItem("CPM");



    if(x<=0){
        div.style.background = "black";
    }
    else if(x>0&&x<10){
        div.style.background = "red";
    }
    else if(x>=10 && x<20){
        div.style.background = "yellow";
    }
    else if(x>=20){
        div.style.background = "green";
    }

}, 500);

document.body.append(div);



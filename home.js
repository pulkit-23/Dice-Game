function rollDice(){
    var x=Math.floor((Math.random()*6)+1);
    var y=Math.floor((Math.random()*6)+1);
    //document.getElementById("p1").innerHTML=x;
    //document.getElementById("p2").innerHTML=y;
    if(x>y){
        document.getElementById("heading").innerHTML="Player 1 Wins!";
    }
    else if(y>x){
        document.getElementById("heading").innerHTML="Player 2 Wins!";
    }
    else{
        document.getElementById("heading").innerHTML="Draw!";
    }
    if(x===1){
        if(document.querySelector("#d1p1").style.visibility==="hidden") document.querySelector("#d1p1").style.visibility="hidden";
        else document.querySelector("#d1p1").style.visibility="hidden";
        if(document.querySelector("#d1p2").style.visibility==="hidden") document.querySelector("#d1p2").style.visibility="hidden";
        else document.querySelector("#d1p2").style.visibility="hidden";
        if(document.querySelector("#d1p3").style.visibility==="hidden") document.querySelector("#d1p3").style.visibility="hidden";
        else document.querySelector("#d1p3").style.visibility="hidden";
        if(document.querySelector("#d1p4").style.visibility==="hidden") document.querySelector("#d1p4").style.visibility="hidden";
        else document.querySelector("#d1p4").style.visibility="hidden";
        if(document.querySelector("#d1p5").style.visibility==="hidden") document.querySelector("#d1p5").style.visibility="visible";
        else document.querySelector("#d1p5").style.visibility="visible";
        if(document.querySelector("#d1p6").style.visibility==="hidden") document.querySelector("#d1p6").style.visibility="hidden";
        else document.querySelector("#d1p6").style.visibility="hidden";
        if(document.querySelector("#d1p7").style.visibility==="hidden") document.querySelector("#d1p7").style.visibility="hidden";
        else document.querySelector("#d1p7").style.visibility="hidden";
        if(document.querySelector("#d1p8").style.visibility==="hidden") document.querySelector("#d1p8").style.visibility="hidden";
        else document.querySelector("#d1p8").style.visibility="hidden";
        if(document.querySelector("#d1p9").style.visibility==="hidden") document.querySelector("#d1p9").style.visibility="hidden";
        else document.querySelector("#d1p9").style.visibility="hidden";
    }
    else if(x===2){
        if(document.querySelector("#d1p1").style.visibility==="hidden") document.querySelector("#d1p1").style.visibility="hidden";
        else document.querySelector("#d1p1").style.visibility="hidden";
        if(document.querySelector("#d1p2").style.visibility==="hidden") document.querySelector("#d1p2").style.visibility="hidden";
        else document.querySelector("#d1p2").style.visibility="hidden";
        if(document.querySelector("#d1p3").style.visibility==="hidden") document.querySelector("#d1p3").style.visibility="visible";
        else document.querySelector("#d1p3").style.visibility="visible";
        if(document.querySelector("#d1p4").style.visibility==="hidden") document.querySelector("#d1p4").style.visibility="hidden";
        else document.querySelector("#d1p4").style.visibility="hidden";
        if(document.querySelector("#d1p5").style.visibility==="hidden") document.querySelector("#d1p5").style.visibility="hidden";
        else document.querySelector("#d1p5").style.visibility="hidden";
        if(document.querySelector("#d1p6").style.visibility==="hidden") document.querySelector("#d1p6").style.visibility="hidden";
        else document.querySelector("#d1p6").style.visibility="hidden";
        if(document.querySelector("#d1p7").style.visibility==="hidden") document.querySelector("#d1p7").style.visibility="visible";
        else document.querySelector("#d1p7").style.visibility="visible";
        if(document.querySelector("#d1p8").style.visibility==="hidden") document.querySelector("#d1p8").style.visibility="hidden";
        else document.querySelector("#d1p8").style.visibility="hidden";
        if(document.querySelector("#d1p9").style.visibility==="hidden") document.querySelector("#d1p9").style.visibility="hidden";
        else document.querySelector("#d1p9").style.visibility="hidden";
    }
    else if(x===3){
        if(document.querySelector("#d1p1").style.visibility==="hidden") document.querySelector("#d1p1").style.visibility="hidden";
        else document.querySelector("#d1p1").style.visibility="hidden";
        if(document.querySelector("#d1p2").style.visibility==="hidden") document.querySelector("#d1p2").style.visibility="hidden";
        else document.querySelector("#d1p2").style.visibility="hidden";
        if(document.querySelector("#d1p3").style.visibility==="hidden") document.querySelector("#d1p3").style.visibility="visible";
        else document.querySelector("#d1p3").style.visibility="visible";
        if(document.querySelector("#d1p4").style.visibility==="hidden") document.querySelector("#d1p4").style.visibility="hidden";
        else document.querySelector("#d1p4").style.visibility="hidden";
        if(document.querySelector("#d1p5").style.visibility==="hidden") document.querySelector("#d1p5").style.visibility="visible";
        else document.querySelector("#d1p5").style.visibility="visible";
        if(document.querySelector("#d1p6").style.visibility==="hidden") document.querySelector("#d1p6").style.visibility="hidden";
        else document.querySelector("#d1p6").style.visibility="hidden";
        if(document.querySelector("#d1p7").style.visibility==="hidden") document.querySelector("#d1p7").style.visibility="visible";
        else document.querySelector("#d1p7").style.visibility="visible";
        if(document.querySelector("#d1p8").style.visibility==="hidden") document.querySelector("#d1p8").style.visibility="hidden";
        else document.querySelector("#d1p8").style.visibility="hidden";
        if(document.querySelector("#d1p9").style.visibility==="hidden") document.querySelector("#d1p9").style.visibility="hidden";
        else document.querySelector("#d1p9").style.visibility="hidden";
    }
    else if(x===4){
        if(document.querySelector("#d1p1").style.visibility==="hidden") document.querySelector("#d1p1").style.visibility="visible";
        else document.querySelector("#d1p1").style.visibility="visible";
        if(document.querySelector("#d1p2").style.visibility==="hidden") document.querySelector("#d1p2").style.visibility="hidden";
        else document.querySelector("#d1p2").style.visibility="hidden";
        if(document.querySelector("#d1p3").style.visibility==="hidden") document.querySelector("#d1p3").style.visibility="visible";
        else document.querySelector("#d1p3").style.visibility="visible";
        if(document.querySelector("#d1p4").style.visibility==="hidden") document.querySelector("#d1p4").style.visibility="hidden";
        else document.querySelector("#d1p4").style.visibility="hidden";
        if(document.querySelector("#d1p5").style.visibility==="hidden") document.querySelector("#d1p5").style.visibility="hidden";
        else document.querySelector("#d1p5").style.visibility="hidden";
        if(document.querySelector("#d1p6").style.visibility==="hidden") document.querySelector("#d1p6").style.visibility="hidden";
        else document.querySelector("#d1p6").style.visibility="hidden";
        if(document.querySelector("#d1p7").style.visibility==="hidden") document.querySelector("#d1p7").style.visibility="visible";
        else document.querySelector("#d1p7").style.visibility="visible";
        if(document.querySelector("#d1p8").style.visibility==="hidden") document.querySelector("#d1p8").style.visibility="hidden";
        else document.querySelector("#d1p8").style.visibility="hidden";
        if(document.querySelector("#d1p9").style.visibility==="hidden") document.querySelector("#d1p9").style.visibility="visible";
        else document.querySelector("#d1p9").style.visibility="visible";
    }
    else if(x===5){
        if(document.querySelector("#d1p1").style.visibility==="hidden") document.querySelector("#d1p1").style.visibility="visible";
        else document.querySelector("#d1p1").style.visibility="visible";
        if(document.querySelector("#d1p2").style.visibility==="hidden") document.querySelector("#d1p2").style.visibility="hidden";
        else document.querySelector("#d1p2").style.visibility="hidden";
        if(document.querySelector("#d1p3").style.visibility==="hidden") document.querySelector("#d1p3").style.visibility="visible";
        else document.querySelector("#d1p3").style.visibility="visible";
        if(document.querySelector("#d1p4").style.visibility==="hidden") document.querySelector("#d1p4").style.visibility="hidden";
        else document.querySelector("#d1p4").style.visibility="hidden";
        if(document.querySelector("#d1p5").style.visibility==="hidden") document.querySelector("#d1p5").style.visibility="visible";
        else document.querySelector("#d1p5").style.visibility="visible";
        if(document.querySelector("#d1p6").style.visibility==="hidden") document.querySelector("#d1p6").style.visibility="hidden";
        else document.querySelector("#d1p6").style.visibility="hidden";
        if(document.querySelector("#d1p7").style.visibility==="hidden") document.querySelector("#d1p7").style.visibility="visible";
        else document.querySelector("#d1p7").style.visibility="visible";
        if(document.querySelector("#d1p8").style.visibility==="hidden") document.querySelector("#d1p8").style.visibility="hidden";
        else document.querySelector("#d1p8").style.visibility="hidden";
        if(document.querySelector("#d1p9").style.visibility==="hidden") document.querySelector("#d1p9").style.visibility="visible";
        else document.querySelector("#d1p9").style.visibility="visible";
    }
    else if(x===6){
        if(document.querySelector("#d1p1").style.visibility==="hidden") document.querySelector("#d1p1").style.visibility="visible";
        else document.querySelector("#d1p1").style.visibility="visible";
        if(document.querySelector("#d1p2").style.visibility==="hidden") document.querySelector("#d1p2").style.visibility="hidden";
        else document.querySelector("#d1p2").style.visibility="hidden";
        if(document.querySelector("#d1p3").style.visibility==="hidden") document.querySelector("#d1p3").style.visibility="visible";
        else document.querySelector("#d1p3").style.visibility="visible";
        if(document.querySelector("#d1p4").style.visibility==="hidden") document.querySelector("#d1p4").style.visibility="visible";
        else document.querySelector("#d1p4").style.visibility="visible";
        if(document.querySelector("#d1p5").style.visibility==="hidden") document.querySelector("#d1p5").style.visibility="hidden";
        else document.querySelector("#d1p5").style.visibility="hidden";
        if(document.querySelector("#d1p6").style.visibility==="hidden") document.querySelector("#d1p6").style.visibility="visible";
        else document.querySelector("#d1p6").style.visibility="visible";
        if(document.querySelector("#d1p7").style.visibility==="hidden") document.querySelector("#d1p7").style.visibility="visible";
        else document.querySelector("#d1p7").style.visibility="visible";
        if(document.querySelector("#d1p8").style.visibility==="hidden") document.querySelector("#d1p8").style.visibility="hidden";
        else document.querySelector("#d1p8").style.visibility="hidden";
        if(document.querySelector("#d1p9").style.visibility==="hidden") document.querySelector("#d1p9").style.visibility="visible";
        else document.querySelector("#d1p9").style.visibility="visible";
    }
    if(y===1){
        if(document.querySelector("#d2p1").style.visibility==="hidden") document.querySelector("#d2p1").style.visibility="hidden";
        else document.querySelector("#d2p1").style.visibility="hidden";
        if(document.querySelector("#d2p2").style.visibility==="hidden") document.querySelector("#d2p2").style.visibility="hidden";
        else document.querySelector("#d2p2").style.visibility="hidden";
        if(document.querySelector("#d2p3").style.visibility==="hidden") document.querySelector("#d2p3").style.visibility="hidden";
        else document.querySelector("#d2p3").style.visibility="hidden";
        if(document.querySelector("#d2p4").style.visibility==="hidden") document.querySelector("#d2p4").style.visibility="hidden";
        else document.querySelector("#d2p4").style.visibility="hidden";
        if(document.querySelector("#d2p5").style.visibility==="hidden") document.querySelector("#d2p5").style.visibility="visible";
        else document.querySelector("#d2p5").style.visibility="visible";
        if(document.querySelector("#d2p6").style.visibility==="hidden") document.querySelector("#d2p6").style.visibility="hidden";
        else document.querySelector("#d2p6").style.visibility="hidden";
        if(document.querySelector("#d2p7").style.visibility==="hidden") document.querySelector("#d2p7").style.visibility="hidden";
        else document.querySelector("#d2p7").style.visibility="hidden";
        if(document.querySelector("#d2p8").style.visibility==="hidden") document.querySelector("#d2p8").style.visibility="hidden";
        else document.querySelector("#d2p8").style.visibility="hidden";
        if(document.querySelector("#d2p9").style.visibility==="hidden") document.querySelector("#d2p9").style.visibility="hidden";
        else document.querySelector("#d2p9").style.visibility="hidden";
    }
    else if(y===2){
        if(document.querySelector("#d2p1").style.visibility==="hidden") document.querySelector("#d2p1").style.visibility="hidden";
        else document.querySelector("#d2p1").style.visibility="hidden";
        if(document.querySelector("#d2p2").style.visibility==="hidden") document.querySelector("#d2p2").style.visibility="hidden";
        else document.querySelector("#d2p2").style.visibility="hidden";
        if(document.querySelector("#d2p3").style.visibility==="hidden") document.querySelector("#d2p3").style.visibility="visible";
        else document.querySelector("#d2p3").style.visibility="visible";
        if(document.querySelector("#d2p4").style.visibility==="hidden") document.querySelector("#d2p4").style.visibility="hidden";
        else document.querySelector("#d2p4").style.visibility="hidden";
        if(document.querySelector("#d2p5").style.visibility==="hidden") document.querySelector("#d2p5").style.visibility="hidden";
        else document.querySelector("#d2p5").style.visibility="hidden";
        if(document.querySelector("#d2p6").style.visibility==="hidden") document.querySelector("#d2p6").style.visibility="hidden";
        else document.querySelector("#d2p6").style.visibility="hidden";
        if(document.querySelector("#d2p7").style.visibility==="hidden") document.querySelector("#d2p7").style.visibility="visible";
        else document.querySelector("#d2p7").style.visibility="visible";
        if(document.querySelector("#d2p8").style.visibility==="hidden") document.querySelector("#d2p8").style.visibility="hidden";
        else document.querySelector("#d2p8").style.visibility="hidden";
        if(document.querySelector("#d2p9").style.visibility==="hidden") document.querySelector("#d2p9").style.visibility="hidden";
        else document.querySelector("#d2p9").style.visibility="hidden";
    }
    else if(y===3){
        if(document.querySelector("#d2p1").style.visibility==="hidden") document.querySelector("#d2p1").style.visibility="hidden";
        else document.querySelector("#d2p1").style.visibility="hidden";
        if(document.querySelector("#d2p2").style.visibility==="hidden") document.querySelector("#d2p2").style.visibility="hidden";
        else document.querySelector("#d2p2").style.visibility="hidden";
        if(document.querySelector("#d2p3").style.visibility==="hidden") document.querySelector("#d2p3").style.visibility="visible";
        else document.querySelector("#d2p3").style.visibility="visible";
        if(document.querySelector("#d2p4").style.visibility==="hidden") document.querySelector("#d2p4").style.visibility="hidden";
        else document.querySelector("#d2p4").style.visibility="hidden";
        if(document.querySelector("#d2p5").style.visibility==="hidden") document.querySelector("#d2p5").style.visibility="visible";
        else document.querySelector("#d2p5").style.visibility="visible";
        if(document.querySelector("#d2p6").style.visibility==="hidden") document.querySelector("#d2p6").style.visibility="hidden";
        else document.querySelector("#d2p6").style.visibility="hidden";
        if(document.querySelector("#d2p7").style.visibility==="hidden") document.querySelector("#d2p7").style.visibility="visible";
        else document.querySelector("#d2p7").style.visibility="visible";
        if(document.querySelector("#d2p8").style.visibility==="hidden") document.querySelector("#d2p8").style.visibility="hidden";
        else document.querySelector("#d2p8").style.visibility="hidden";
        if(document.querySelector("#d2p9").style.visibility==="hidden") document.querySelector("#d2p9").style.visibility="hidden";
        else document.querySelector("#d2p9").style.visibility="hidden";
    }
    else if(y===4){
        if(document.querySelector("#d2p1").style.visibility==="hidden") document.querySelector("#d2p1").style.visibility="visible";
        else document.querySelector("#d2p1").style.visibility="visible";
        if(document.querySelector("#d2p2").style.visibility==="hidden") document.querySelector("#d2p2").style.visibility="hidden";
        else document.querySelector("#d2p2").style.visibility="hidden";
        if(document.querySelector("#d2p3").style.visibility==="hidden") document.querySelector("#d2p3").style.visibility="visible";
        else document.querySelector("#d2p3").style.visibility="visible";
        if(document.querySelector("#d2p4").style.visibility==="hidden") document.querySelector("#d2p4").style.visibility="hidden";
        else document.querySelector("#d2p4").style.visibility="hidden";
        if(document.querySelector("#d2p5").style.visibility==="hidden") document.querySelector("#d2p5").style.visibility="hidden";
        else document.querySelector("#d2p5").style.visibility="hidden";
        if(document.querySelector("#d2p6").style.visibility==="hidden") document.querySelector("#d2p6").style.visibility="hidden";
        else document.querySelector("#d2p6").style.visibility="hidden";
        if(document.querySelector("#d2p7").style.visibility==="hidden") document.querySelector("#d2p7").style.visibility="visible";
        else document.querySelector("#d2p7").style.visibility="visible";
        if(document.querySelector("#d2p8").style.visibility==="hidden") document.querySelector("#d2p8").style.visibility="hidden";
        else document.querySelector("#d2p8").style.visibility="hidden";
        if(document.querySelector("#d2p9").style.visibility==="hidden") document.querySelector("#d2p9").style.visibility="visible";
        else document.querySelector("#d2p9").style.visibility="visible";
    }
    else if(y===5){
        if(document.querySelector("#d2p1").style.visibility==="hidden") document.querySelector("#d2p1").style.visibility="visible";
        else document.querySelector("#d2p1").style.visibility="visible";
        if(document.querySelector("#d2p2").style.visibility==="hidden") document.querySelector("#d2p2").style.visibility="hidden";
        else document.querySelector("#d2p2").style.visibility="hidden";
        if(document.querySelector("#d2p3").style.visibility==="hidden") document.querySelector("#d2p3").style.visibility="visible";
        else document.querySelector("#d2p3").style.visibility="visible";
        if(document.querySelector("#d2p4").style.visibility==="hidden") document.querySelector("#d2p4").style.visibility="hidden";
        else document.querySelector("#d2p4").style.visibility="hidden";
        if(document.querySelector("#d2p5").style.visibility==="hidden") document.querySelector("#d2p5").style.visibility="visible";
        else document.querySelector("#d2p5").style.visibility="visible";
        if(document.querySelector("#d2p6").style.visibility==="hidden") document.querySelector("#d2p6").style.visibility="hidden";
        else document.querySelector("#d2p6").style.visibility="hidden";
        if(document.querySelector("#d2p7").style.visibility==="hidden") document.querySelector("#d2p7").style.visibility="visible";
        else document.querySelector("#d2p7").style.visibility="visible";
        if(document.querySelector("#d2p8").style.visibility==="hidden") document.querySelector("#d2p8").style.visibility="hidden";
        else document.querySelector("#d2p8").style.visibility="hidden";
        if(document.querySelector("#d2p9").style.visibility==="hidden") document.querySelector("#d2p9").style.visibility="visible";
        else document.querySelector("#d2p9").style.visibility="visible";
    }
    else if(y===6){
        if(document.querySelector("#d2p1").style.visibility==="hidden") document.querySelector("#d2p1").style.visibility="visible";
        else document.querySelector("#d2p1").style.visibility="visible";
        if(document.querySelector("#d2p2").style.visibility==="hidden") document.querySelector("#d2p2").style.visibility="hidden";
        else document.querySelector("#d2p2").style.visibility="hidden";
        if(document.querySelector("#d2p3").style.visibility==="hidden") document.querySelector("#d2p3").style.visibility="visible";
        else document.querySelector("#d2p3").style.visibility="visible";
        if(document.querySelector("#d2p4").style.visibility==="hidden") document.querySelector("#d2p4").style.visibility="visible";
        else document.querySelector("#d2p4").style.visibility="visible";
        if(document.querySelector("#d2p5").style.visibility==="hidden") document.querySelector("#d2p5").style.visibility="hidden";
        else document.querySelector("#d2p5").style.visibility="hidden";
        if(document.querySelector("#d2p6").style.visibility==="hidden") document.querySelector("#d2p6").style.visibility="visible";
        else document.querySelector("#d2p6").style.visibility="visible";
        if(document.querySelector("#d2p7").style.visibility==="hidden") document.querySelector("#d2p7").style.visibility="visible";
        else document.querySelector("#d2p7").style.visibility="visible";
        if(document.querySelector("#d2p8").style.visibility==="hidden") document.querySelector("#d2p8").style.visibility="hidden";
        else document.querySelector("#d2p8").style.visibility="hidden";
        if(document.querySelector("#d2p9").style.visibility==="hidden") document.querySelector("#d2p9").style.visibility="visible";
        else document.querySelector("#d2p9").style.visibility="visible";
    }

    
}
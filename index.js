let show1=document.getElementById("textbox1");
let show2=document.getElementById("textbox2");
let display1=document.getElementById("head1");
let display2=document.getElementById("head2")
// let sec=60;
let abc; 
function start(){

//  clearInterval(abc);
seconds();
// if (display1.innerHTML== 0 && display2.innerHTML==0){
//     clearInterval(abc);
// }
// // clearInterval(abc);
 }
function seconds(){
    // let abc = setInterval(seconds, 1000);
    display1.innerHTML = show1.value;
    display2.innerHTML = show2.value;
    abc=setInterval(function(){
        display2.innerHTML--;
     if (display2.innerHTML==0 && display1.innerHTML>0){
        display1.innerHTML--
        display2.innerHTML=60;
     } else if(display2.innerHTML==0 && display1.innerHTML==0){
        clearInterval(abc)

     }
     
     
        
    },1000);
    
    
    // if (display2.innerHTML==0){
    //     display2.innerHTML=sec;
    //     display2.innerHTML--;
    //     display1.innerHTML--;
       
    // } else{
    //     display2.innerHTML--;
     }
 function pause(){
    if(document.getElementById("play").innerHTML=='pause'){
        clearInterval(abc);
        document.getElementById("play").innerHTML='play'
    } else {
        // seconds();
        abc = setInterval(function () {
          display2.innerHTML--;
          if (display2.innerHTML == 0 && display1.innerHTML > 0) {
            display1.innerHTML--;
            display2.innerHTML = 60;
          } else if (display2.innerHTML == 0 && display1.innerHTML == 0) {
            clearInterval(abc);
          }
        }, 1000);
    
        document.getElementById("play").innerHTML='pause'
    }
 }
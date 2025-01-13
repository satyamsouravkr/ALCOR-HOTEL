function menuShow(){
    if(document.getElementById("menu").style.left==="-2000px"){
        document.getElementById("menu").style.left="0px";
        // document.getElementById("menu").style.opacity="1";
    }
}

function menuHide(){
    if(document.getElementById("menu").style.left==="0px"){
        document.getElementById("menu").style.left="-2000px";   
    }
}

// <!-- room servies 1-->
function fun1(){
    if(document.getElementById("hide1").style.display==="none")
{
    document.getElementById("hide1").style.display="block";
    document.getElementById("btn").innerHTML="Read less";
}
else{
    document.getElementById("hide1").style.display="none";
    document.getElementById("btn").innerHTML="Read more";
}

}
function fun2(){
    if(document.getElementById("hide2").style.display==="none")
{
    document.getElementById("hide2").style.display="block";
    document.getElementById("stn").innerHTML="Read less";
}
else{
    document.getElementById("hide2").style.display="none";
    document.getElementById("stn").innerHTML="Read more";
}
}
function fun3(){
    if(document.getElementById("hide3").style.display==="none")
{
    document.getElementById("hide3").style.display="block";
    document.getElementById("ltn").innerHTML="Read less";
}
else{
    document.getElementById("hide3").style.display="none";
    document.getElementById("ltn").innerHTML="Read more";
}
}
// <!-- room servies 2-->
function fun4(){
    if(document.getElementById("hide4").style.display==="none")
{
    document.getElementById("hide4").style.display="block";
    document.getElementById("a").innerHTML="Read less";
}
else{
    document.getElementById("hide4").style.display="none";
    document.getElementById("a").innerHTML="Read more";
}

}
function fun5(){
    if(document.getElementById("hide5").style.display==="none")
{
    document.getElementById("hide5").style.display="block";
    document.getElementById("stn").innerHTML="Read less";
}
else{
    document.getElementById("hide5").style.display="none";
    document.getElementById("b").innerHTML="Read more";
}
}
function fun6(){
    if(document.getElementById("hide6").style.display==="none")
{
    document.getElementById("hide6").style.display="block";
    document.getElementById("c").innerHTML="Read less";
}
else{
    document.getElementById("hide6").style.display="none";
    document.getElementById("c").innerHTML="Read more";
}
}

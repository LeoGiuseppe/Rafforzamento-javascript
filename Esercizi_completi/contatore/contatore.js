let contatore =0


function f1(){
    contatore+=1
document.getElementById("testo").textContent=contatore
if (contatore==0) {
    document.getElementById("testo").style.color="black"
}
else if(contatore<0){
    document.getElementById("testo").style.color="red"
}
else if(contatore>0){
    document.getElementById("testo").style.color="green"
}
 if(contatore>10){
   document.getElementById("testo").style.fontWeight="bold"
}else{
     document.getElementById("testo").style.fontWeight="lighter"
}
}
function f2(){
      contatore-=1
document.getElementById("testo").textContent=contatore
if (contatore==0) {
    document.getElementById("testo").style.color="black"
}
else if(contatore<0){
    document.getElementById("testo").style.color="red"
}
else if(contatore>0){
    document.getElementById("testo").style.color="green"
}
 if(contatore>10){
   document.getElementById("testo").style.fontWeight="bold"
}else{
     document.getElementById("testo").style.fontWeight="lighter"
}
}
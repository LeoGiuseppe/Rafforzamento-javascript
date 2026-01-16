function f1() {
    
   
    
    let nome = document.getElementById("nome").value;
    let genere = document.getElementById("sceltagenere").value;

    if (nome == "") {
        document.getElementById("nome").style.border = "2px solid red";
    } 
    else if (genere == "Uomo") {
        document.getElementById("nome").style.border = "2px solid blue";
    } 
    else if (genere == "Donna") {
        document.getElementById("nome").style.border = "2px solid pink";
    }
}
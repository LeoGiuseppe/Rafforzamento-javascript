function controllaDati() {
    
    let campoNome = document.getElementById("nome-input");
    let selettoreGenere = document.getElementById("genere-select");
    
    let nome = campoNome.value;
    let genere = selettoreGenere.value;

    if (nome == "") {
        campoNome.style.border = "2px solid red";
    } 
    else if (genere == "Uomo") {
        campoNome.style.border = "2px solid blue";
    } 
    else if (genere == "Donna") {
        campoNome.style.border = "2px solid pink";
    }
}
function f1() {
   let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let quadrato1 = document.getElementById("quadrato1")
     let quadrato2 = document.getElementById("quadrato2")
    if (num1>num2) {
        quadrato1.style.backgroundColor= "green"
        quadrato2.style.backgroundColor= "grey"
    }
    else if (num1<num2) {
        quadrato1.style.backgroundColor= "grey"
        quadrato2.style.backgroundColor= "green"
    }
    else if (num1==num2) {
        quadrato1.style.backgroundColor= "yellow"
        quadrato2.style.backgroundColor= "yellow"
    }
}

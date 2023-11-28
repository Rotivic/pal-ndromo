function esPalindromo(frase) {
   
    frase = frase.toLowerCase().replace(/\s/g, '');
    if(frase.split("").reverse().join("") == frase){
        return true;
    }else{
        return false;
    }
  
}


console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("hola")); // false
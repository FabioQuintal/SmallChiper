class ShiftCipher {
    constructor(number){
      this.number = number
    }
  
    encrypt(frase) {
      let fraseFinal = ''
      const frasep = frase.toUpperCase();
      console.log("Frase Inicial: "+frasep)
      for(let i=0; i<frasep.length; i++){
        let num = frasep.charCodeAt(i)
        console.log("Numero do primeiro charCodeAt: " + num + " Letra: " + frasep[i])
        if(num >= 65 && num <= 90){
          num += this.number;
          console.log("Numero após primeira verificação entre 65 a 90: "+num)
          if(num > 90){
            num-=26
            console.log("Número após subtrair 26: "+num)
          }
        }
        fraseFinal+= String.fromCharCode(num)
        console.log("Frase final formada: " + fraseFinal)
      }
      return fraseFinal
    }
  
    decrypt(frase) {
      let fraseFinal = ''
      const frasep = frase.toLowerCase();
      for(let i=0; i<frasep.length; i++){
        let num = frasep.charCodeAt(i)
        if(num >= 97 && num <= 122){
          num -= this.number;
          if(num < 97){
            num+=26
          }
        }
        fraseFinal+= String.fromCharCode(num)
      }
      return fraseFinal
    }
  }
  
let numerosDeVitorias = 2000
let numerosDeDerrotas = 15
let saldoDeVitorias = numerosDeVitorias - numerosDeDerrotas;


nivel() 


function nivel() {
    if (saldoDeVitorias < 10) {
        console.log (`O Herói tem  saldo de ${saldoDeVitorias}, está no nível de Ferro `);
    }
    else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50){
     console.log   (`O Herói tem  saldo de ${saldoDeVitorias}, está no nível de Prata  `)
    }
    
    else if (saldoDeVitorias >= 51 && saldoDeVitorias <=  80){
      console.log  (`O Herói tem  saldo de ${saldoDeVitorias}, está no nível de Ouro  `)
    }
    else if (saldoDeVitorias >= 81 && saldoDeVitorias  <= 90 ) {
     console.log   (`O Herói tem  saldo de ${saldoDeVitorias}, está no nível de Diamente  `)
    }
    else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100 ){
     console.log   (`O Herói tem  saldo de ${saldoDeVitorias}, está no nível de Lendário  `)
    }
    else { console.log (`O Herói tem  saldo de ${saldoDeVitorias}, está no nível de Imortal `)} 
}




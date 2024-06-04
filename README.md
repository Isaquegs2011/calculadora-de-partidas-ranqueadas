# README - Sistema de Níveis para Heróis

Este é um sistema simples de níveis para heróis, baseado no saldo de vitórias e derrotas. O código foi escrito como parte do curso de Formação Lógica de Programação da DIO (Digital Innovation One).

## Descrição

O sistema calcula o saldo de vitórias subtraindo o número de derrotas do número de vitórias. Com base nesse saldo, determina o nível do herói.

## Como usar

1. Defina os valores das variáveis `numerosDeVitorias` e `numerosDeDerrotas`.
2. Execute a função `nível()` para obter o nível do herói.

## Níveis

- **Ferro**: Saldo de vitórias abaixo de 10.
- **Prata**: Saldo de vitórias entre 21 e 50.
- **Ouro**: Saldo de vitórias entre 51 e 80.
- **Diamante**: Saldo de vitórias entre 81 e 90.
- **Lendário**: Saldo de vitórias entre 91 e 100.
- **Imortal**: Saldo de vitórias acima de 100.

## Exemplo de Uso

```javascript
let numerosDeVitorias = 2000;
let numerosDeDerrotas = 15;

function nível() {
    if (saldoDeVitorias < 10) {
        console.log(`O Herói tem saldo de ${saldoDeVitorias}, está no nível de Ferro.`);
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        console.log(`O Herói tem saldo de ${saldoDeVitorias}, está no nível de Prata.`);
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        console.log(`O Herói tem saldo de ${saldoDeVitorias}, está no nível de Ouro.`);
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        console.log(`O Herói tem saldo de ${saldoDeVitorias}, está no nível de Diamante.`);
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
        console.log(`O Herói tem saldo de ${saldoDeVitorias}, está no nível de Lendário.`);
    } else {
        console.log(`O Herói tem saldo de ${saldoDeVitorias}, está no nível de Imortal.`);
    }
}

nível();

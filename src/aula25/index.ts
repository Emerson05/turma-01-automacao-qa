//funções

//FUNÇÃO COM PARAMETRO E RETORNO

// function somar(a:number, b:number):number{
//     return a+ b;
// }

// const resultado = somar(10,5)
// console.log(resultado)

//FUNÇÃO COM PARAMETRO SEM RETORNO
// function mostrarNome(nome:string):void{
//     console.log(`Óla, ${nome}`)
// }

// mostrarNome("Emerson");

// function pegarIdade():number{
//     return 25;
// }
// const idade = pegarIdade();
// console.log(idade)

// function mostrarMensagem():void{
//     console.log("Óla! Seja bem-vindo!")
// }

// mostrarMensagem();

type Pessoa = {nome: string; idade: number}

function criarPessoa(n: string, idade:number): Pessoa{
    return {nome:n , idade:idade};
}

const p = criarPessoa("Emerson", 25)
console.log(p)

const p1 = criarPessoa("Brunna", 23)
console.log(p1)
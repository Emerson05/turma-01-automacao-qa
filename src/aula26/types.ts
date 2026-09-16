type Pessoa = {nome: string; idade: number}

function criarPessoa(n: string, idade:number): Pessoa{
    return {nome:n , idade:idade};
}

const p = criarPessoa("Emerson", 25)
console.log(p)

const p1 = criarPessoa("Brunna", 23)
console.log(p1)

type Produto = {nome: string; preco: number; estoque: number};

function criarProduto(nome: string, preco: number, estoque: number): Produto {
    return {nome, preco, estoque}
}

const produto = criarProduto("Teclado com led", 150, 59);
console.log(produto);

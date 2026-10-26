const resultado = ["passou", "falhou", "passou", "passou", "falhou"]
let aprovados = 0;
let reprovados = 0;

for(let i = 0; i< resultado.length; i++){
    if(resultado[i] === "passou"){
        aprovados++
    }else{
        reprovados++
    }
}

console.log(`Aprovados: ${aprovados}, Reprovados: ${reprovados}`)

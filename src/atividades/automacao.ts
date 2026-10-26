import PromptSync from "prompt-sync";

const prompt = PromptSync();

let automatizaveis:number = 0;
let naoAutomatizaveis:number = 0;

for(let i = 1; i<=5; i++){
    const cenario: String = prompt(`Digite o ${i}° cenário: `);
    const resposta: String = prompt(`É automatizavél? (sim/não): `).toLowerCase();
    

    if(resposta === "sim"){
        console.log(`${cenario} -> Automatizar`);
        automatizaveis++;
    }else if(resposta === "não" || resposta === "nao"){
        console.log(`${cenario} -> Não-Automatizar`)
        naoAutomatizaveis++;
    }else{
        console.log("Ocorreu um erro!")
    }
}

console.log(`Total de cenários Automatizaveis: ${automatizaveis}`)
console.log(`Total de cenários não Automatizaveis: ${naoAutomatizaveis}`)


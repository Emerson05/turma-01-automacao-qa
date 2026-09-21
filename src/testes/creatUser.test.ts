import { expect, test } from "vitest";

interface User{
    nome:string;
    idade:number
}

function createUser(nome:string,idade:number):User{
    return {nome,idade}
}

test('Criação de usuario com nome e idade',()=>{
    const user = createUser("Fernando", 30)
    expect(user).toEqual({nome: "Fernando", idade: 30})
    expect(user.nome).toBe("Fernando")
})
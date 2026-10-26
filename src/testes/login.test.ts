import {test,describe,expect} from 'vitest'

function login(username: string, password: string): boolean{
    return username === 'Jorginho' && password === '556622'
}

test('Permitir fazer login com credenciais validas', ()=>{
    const efetuandoLogin = login('Jorginho', '556622')
    expect(efetuandoLogin).toBe(true);
})

describe('Negar login com credencais invalidas',()=>{
    test('Negar login com senha incorreta',()=>{
         const efetuandoLogin = login('Jorginho', '52')
         expect(efetuandoLogin).toBe(false);
    });

    test('Negar login com usuário incorreto',()=>{
         const efetuandoLogin = login('Kaio', '556622')
         expect(efetuandoLogin).toBe(false);
    });

    test('Negar login com usuário e senha',()=>{
         const efetuandoLogin = login('Vandeson', '562')
         expect(efetuandoLogin).toBe(false);
    });

    test('Negar login com campos vazios',()=>{
         const efetuandoLogin = login('', '')
         expect(efetuandoLogin).toBe(false);
    });



})
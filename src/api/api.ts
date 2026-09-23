import { title } from "node:process";

interface Postagem {
    id: number;
    title: string;
    body: string
}

// //Get - Buscar post

async function buscarPostagem(id: number): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    console.log('STATUS: ')
    console.log(res.status)

    const resGet = await res.json() as Promise<Postagem>
    return resGet
}

//Post: Cria uma nova postagem

async function criarPostagem(): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            title: "Minha Primeira Postagem",
            body: "Sempre a Subir",
            userId: 1
        }),
    });

    console.log('STATUS')
    console.log(res.status)

    const resPost = await res.json() as Promise<Postagem>;
    return resPost;


}

//Put: Atualiar Postagem
async function atualizarPostagemCompleta(id: number): Promise<Postagem>{
    const corpoEnviado = 
    {   

        title:'Atualização da minha primeira postagem',
        body: 'Aqui tem uma nova descrição',
        userId: 2
    }
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(corpoEnviado),
    });

    console.log('Corpo Enviado')
    console.log(corpoEnviado)

    console.log('STATUS')
    console.log(res.status)

    console.log('Corpo Recebido')
    
    
}

//Patch: Deletar um id
async function deletar(id:number): Promise<void> {
    const res = await fetch( `https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:'DELETE'
    });

    console.log('Status:')
    console.log(res.status)

}

//Patch: Atualiar apenas um Campo
async function atualizarCampo(id: number): Promise<Postagem>{

    const corpoEnviado = 
    {   

        title:'Novo Titulo',
       
    }
      const res = await fetch( `https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type': "application/json"
        },

        body: JSON.stringify(corpoEnviado)


    });
     console.log('Corpo Enviado')
     console.log(corpoEnviado)
     console.log('Status:')
     console.log(res.status)
     console.log('Corpo Enviado')

     const resPatch = await res.json() as Promise<Postagem>
     return resPatch

}

const post = await criarPostagem();
console.log(post)

const get = await buscarPostagem(15);
console.log (get)

const put = await atualizarPostagemCompleta(15)
console.log(put)

deletar(15);

const patch = await atualizarCampo(15)
console.log(patch)
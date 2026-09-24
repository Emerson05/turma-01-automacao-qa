interface Postagem {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// GETS Solicitar dados e Postagem
export async function buscarPostagem(id: number): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    console.log('STATUS:', res.status);

    if (!res.ok) {
        throw new Error(`Erro ao buscar postagem: ${res.status}`);
    }

    return await res.json() as Postagem;
}


// POST Enviar dados para um servidor
export async function criarPostagem(
    postagem: Omit<Postagem, 'id'>
): Promise<Postagem> {

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postagem)
        }
    );

    console.log('STATUS:', res.status);

    if (!res.ok) {
        throw new Error(`Erro ao criar postagem: ${res.status}`);
    }

    return await res.json() as Postagem;
}


// PUT Atualizar Uma postagem
export async function atualizarPostagemCompleta(
    id: number,
    postagem: Omit<Postagem, 'id'>
): Promise<Postagem> {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postagem)
        }
    );

    console.log('STATUS:', res.status);

    if (!res.ok) {
        throw new Error(`Erro ao atualizar postagem: ${res.status}`);
    }

    return await res.json() as Postagem;
}


// PATCH Atualizar um campo de uma Postagem
export async function atualizarCampo(
    id: number,
    campos: Partial<Omit<Postagem, 'id'>>
): Promise<Postagem> {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(campos)
        }
    );

    console.log('STATUS:', res.status);

    if (!res.ok) {
        throw new Error(`Erro ao atualizar campo: ${res.status}`);
    }

    return await res.json() as Postagem;
}


// DELETE
export async function deletar(id: number): Promise<boolean> {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: 'DELETE'
        }
    );

    console.log('STATUS:', res.status);

    if (!res.ok) {
        throw new Error(`Erro ao deletar postagem: ${res.status}`);
    }

    return true;
}

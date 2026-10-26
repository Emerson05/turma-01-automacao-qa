import { describe, test, expect } from 'vitest';

import {
    criarPostagem,
    atualizarPostagemCompleta,
    atualizarCampo,
    deletar
} from './api.js';


describe('Suíte de Testes de Integração - JSONPlaceholder API', () => {

    test('POST: Deve criar uma nova postagem e retornar ID 101', async () => {

        const novaPostagem = {
            title: 'Minha Primeira Postagem',
            body: 'Sempre a Subir',
            userId: 1
        };

        const res = await criarPostagem(novaPostagem);

        expect(res).toHaveProperty('id');
        expect(res.title).toBe(novaPostagem.title);
        expect(res.body).toBe(novaPostagem.body);
        expect(res.userId).toBe(novaPostagem.userId);
    });


    test('PUT: Deve atualizar completamente a postagem 15', async () => {

        const postAtualizado = {
            userId: 2,
            title: 'Atualização da minha primeira postagem',
            body: 'Aqui tem uma nova descrição'
        };

        const res = await atualizarPostagemCompleta(
            15,
            postAtualizado
        );

        expect(res.title).toBe(postAtualizado.title);
        expect(res.userId).toBe(2);
        expect(res.body).toBe(postAtualizado.body);
    });


    test('PATCH: Deve atualizar apenas o título da postagem 15', async () => {

        const res = await atualizarCampo(
            15,
            { title: 'Novo Titulo' }
        );

        expect(res.title).toBe('Novo Titulo');
    });


    test('DELETE: Deve deletar a postagem 15 com sucesso', async () => {

        const sucesso = await deletar(15);

        expect(sucesso).toBe(true);
    });

});

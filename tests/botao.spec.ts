import {test, expect} from '@playwright/test';

test("Botão de login visivel para o usuário", async({page})=>{
    await page.goto('/');

    const button = page.getByRole('button', {name: 'Login'});//ACÃO

    await expect(button).toBeVisible();//VERIFICAÇÃO
});
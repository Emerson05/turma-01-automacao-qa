import { CREDENTIALS } from './constantes';
import { Page } from '@playwright/test';

export async function login(
    page: Page,
    user = CREDENTIALS.standard
) {
    await page.goto('/');
    await page.fill('#user-name', user.user);
    await page.fill('#password', user.password);
    await page.click('#login-button');
}

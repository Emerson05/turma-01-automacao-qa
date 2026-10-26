import {test,expect} from "@playwright/test";
import { loginClinic } from "../helpers/auth";

test.beforeEach(async({page})=>{
    await loginClinic(page);
});


test.describe("Verificando fluxo completo de agendamento e cancelamento de consultas", () => {
    
    test("verificando o link de redirecionamento para a clinica está funcionando", async ({ page }) => {

       await page.getByRole('link', { name: 'open the clinic app' }).click(); 
       await expect(page).toHaveURL(/clinic/);
           
    });

    test("Verificando perfil do Médico",async({page})=>{
        await page.goto("/clinic");

        expect(page.getByTestId('clinic-cta-find')).toBeVisible();
        await page.getByTestId('clinic-cta-find').click();

        await page.getByTestId('clinic-chip-dermatology').click();
        await page.getByTestId('clinic-view-d-neha-bansal').click();
        await expect(page).toHaveURL('/clinic/doctors/d-neha-bansal');

    })

    test("Verificando funcionalidades de consulta end to end", async({page})=>{
        await page.goto("/clinic");

        expect(page.getByTestId('clinic-cta-find')).toBeVisible();
        await page.getByTestId('clinic-cta-find').click();

        await page.getByTestId('clinic-chip-dermatology').click();

        await expect(page.locator('.clinic-doctor-row-name').nth(0)).toHaveText('Dr. Neha Bansal');

        await page.getByTestId('clinic-book-d-neha-bansal').click();
        await page.getByTestId('clinic-day-2026-10-21').click();
        await page.getByTestId('clinic-slot-11:00').click();
        await page.getByTestId('clinic-input-name').fill('Jorginho da Silva');
        await page.getByTestId('clinic-input-phone').fill('0245290872');

        await page.getByTestId('clinic-input-reason').click();

        await page.selectOption('[data-testid="clinic-input-reason"]', 'Follow-up visit');

        await page.getByTestId('clinic-input-notes').fill('Passou Dipirona');
    
        await page.getByTestId('clinic-confirm-booking').click();
        
        await expect(page).toHaveURL("/clinic/book/d-neha-bansal");


        await page.goto("/clinic");
        expect(page.getByTestId('clinic-nav-appointments')).toBeVisible();
        await page.getByTestId('clinic-nav-appointments').click();
        await expect(page).toHaveURL("/clinic/appointments");

        await page.locator('[data-testid$="-cancel"]').first().click();
     
        
        const cancelButtonConfirm = page.getByText('Yes, cancel');
        await cancelButtonConfirm.click();
        
       
        await expect(page.locator('[data-testid$="-status"]').first()).toHaveText('✕ Cancelled');

    })

});
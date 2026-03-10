import { test, expect } from '@playwright/test';
test ("prendre commande", {tag: ['@regression', '@smoke',]} ,async ({ page }) => {
// aller au site de shopping
  await page.goto("https://practiceautomatedtesting.com/shopping");
  // ajouter les produits 5 et 9 au panier
  await page.getByTestId('add-to-cart-5').click();
    // Assertion produit 5
  const product5 = page.locator('[data-testid="product-5"]');
  await expect(product5).toContainText('In cart: 1');

  await page.getByTestId('add-to-cart-9').click();
    // Assertion produit 9
  const product9 = page.locator('[data-testid="product-9"]');
  await expect(product9).toContainText('In cart: 1');

   // cibler le bouton du panier
  const cartButton = page.getByTestId('cart-button');
  // Assertion : vérifier qu'il contient "2 items"
  await expect(cartButton).toContainText('2 items');
  // cliquer sur btn :
  await cartButton.click();

    //  Vérifier le total
  await expect(page.getByText('$102.83')).toBeVisible();
  
  // remplir le formulaire :
  await page.locator('[data-testid="billing-firstname"]').fill('ikram');
  await page.locator('[data-testid="billing-lastname"]').fill('Test');
  await page.locator('[data-testid="billing-email"]').fill('ikram@test.com');
  await page.locator('[data-testid="billing-phone"]').fill('0555555555');
  await page.locator('[data-testid="billing-address"]').fill('Alger');
  await page.locator('[data-testid="billing-city"]').fill('Alger');
  await page.locator('[data-testid="billing-zipcode"]').fill('16000');

  // Country (select)
  await page.locator('[data-testid="billing-country"]').selectOption('France');

     //  Paiement
  await page.locator('[data-testid="payment-credit-card"]').click();

  // remplir les infos de carte
   await page.locator('[data-testid="card-number"]').fill('1234 5678 9012 3456');
  await page.locator('[data-testid="card-name"]').fill('Ikram Test');
  await page.locator('[data-testid="card-expiry"]').fill('12/30');
  await page.locator('[data-testid="card-cvv"]').fill('123');

  //  Cliquer Place Order
  await page.locator('[data-testid="place-order"]').click();


  // Assertion finale (confirmation)
  //assertion 1: Vérifier que le message de confirmation 
//   const confirmationMessage = page.locator('[data-testid="payment-success"]');
//     await expect(confirmationMessage).toHaveText('Payment Successful!');

//     // assertion 2: Vérifier que le total affiché est correct
//   //const orderTotal = page.locator('.font-semibold.text-gray-900.dark\\:text-white');
//   await expect(page.getByText('$102.83')).toBeVisible();
//     //await expect(orderTotal).toHaveText('Total: $102.83');

    // assertion 3: Vérifier btn download 
    const downloadButton = page.locator('[data-testid="download-invoice"]');
    await expect(downloadButton).toBeVisible();
});
test ("prendre commande sans remplir le formulaire", {tag:'@regression'} ,async ({ page }) => {
  
});

test ("prendre commande avec formulaire incomplet", {tag:'@smoke'} ,async ({ page }) => {
  
});

test ("prendre commande avec formulaire complet", {tag:'@e2e'} ,async ({ page }) => {
  
});
import {BrowserContext, expect, Page} from "@playwright/test";

export async function gotoAiraloLandingPage(page: Page, context: BrowserContext) {
    await page.goto('/');
    await addCookie(context,"Airalo.10million", "true","www.airalo.com" )
    await acceptPrivacy(page)
    await clickDontAllowPushNotifications(page)
}

export async function closeAiralo10MillionPopup(page) {
    await page.getByTestId("close-button").click();
}

export async function acceptPrivacy(page: Page) {
    await page.getByRole("button", {name: "ACCEPT"}).click()
}

export async function clickDontAllowPushNotifications(page: Page) {
    const selector = "#wzrk-cancel";
    try {
            await page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
            const isButtonVisible = await page.locator(selector).isVisible();
        if (isButtonVisible) {
            await page.locator(selector).click();
        }
    } catch (error) {
        console.log("Button is not available within the given time.");
    }
}

export async function searchForCountry(page: Page, country: string) {
    await Promise.all([
        page.waitForResponse("**/api/v2/store/search/*", {timeout: 10000}),
        page.getByTestId("search-input").fill(country)
    ])
}

export async function selectLocaleSIM(page: Page, country: string) {
    const countryLocator = page.getByTestId(`${country}-name`);
    await countryLocator.first().click();
}

export async function verifyPackageDetails(page, packageDetails) {
    await expect(page.getByTestId('sim-detail-info-list').getByTestId('COVERAGE-value')).toContainText(packageDetails.coverage);
    await expect(page.getByTestId('sim-detail-info-list').getByTestId('DATA-value')).toContainText(packageDetails.data);
    await expect(page.getByTestId('sim-detail-info-list').getByTestId('VALIDITY-value')).toContainText(packageDetails.validity);
    await expect(page.getByTestId('sim-detail-info-list').getByTestId('PRICE-value')).toContainText(packageDetails.price);
    await expect(page.getByTestId('sim-detail-operator-title').getByRole('paragraph')).toContainText(packageDetails.title);
}

export async function selecteSIMBasedOnValidity(page, validity) {
    await page.getByTestId("sim-package-item").filter({hasText: validity}).getByTestId("esim-button").click()
}

export async function selectFirsteSIM(page) {
    await page.getByTestId("sim-package-item").nth(0).getByTestId("esim-button").click()
}

export async function addCookie(context: BrowserContext,cookieName:string,value:string,domain:string){
    await context.addCookies([{
        name: cookieName,
        value: value,
        domain: domain,
        path: '/',
        expires: -1, // -1 means the cookie will expire when the session ends
        httpOnly: false, // true if the cookie is HTTP only
        secure: false, // true if the cookie is secure
        sameSite: 'Lax' // Can be 'Strict', 'Lax' or 'None'
    }]);
}

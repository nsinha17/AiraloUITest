import {test} from '@playwright/test';
import {
    gotoAiraloLandingPage,
    searchForCountry,
    selecteSIMBasedOnValidity,
    selectLocaleSIM,
    verifyPackageDetails
} from "./utils";

test.beforeEach(async ({page, context}) => {
    await gotoAiraloLandingPage(page, context);
})

test('test for eSIM for Japan having validity of 7 days', async ({page}) => {
    const packageDetails = {
        "title": "Moshi Moshi",
        "coverage": "Japan",
        "data": "1 GB",
        "validity": "7 Days",
        "price": "$4.50 USD"
    }
    await searchForCountry(page, packageDetails.coverage)
    await selectLocaleSIM(page, packageDetails.coverage)
    await selecteSIMBasedOnValidity(page, packageDetails.validity)
    await verifyPackageDetails(page, packageDetails)
});

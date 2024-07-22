# Airalo UI Test Suite

This repository contains a Playwright-based test suite designed to validate the functionality of eSIMs on the Airalo website. The tests verify that eSIMs can be selected based on specific criteria and that package details are correctly displayed.

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Test Details](#test-details)

## Overview

The test suite includes automated tests to:

1. **Navigate to the Airalo landing page.**
2. **Search for eSIM** based on country.
3. **Select eSIM** according to the specified criteria.
4. **Verify eSIM package details** to ensure they match the expected values.

## Setup

To run the tests, you'll need:

- Node.js (v14 or later)
- Playwright

### Clone the Repository

```bash
git clone https://github.com/nsinha17/AiraloUITest.git
cd AiraloUITest
```

### Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```
Install Playwright browsers
```bash
npx playwright install
```

### Configuration

No additional configuration is required for this test suite. The tests are set up to run against the Airalo landing page and require no modifications to the test code.

## Running Tests

To execute the tests, use the following command:

```bash
npx playwright test
```

## Test Details

### Test Setup

The `beforeEach` hook navigates to the Airalo landing page before each test case.

### Test: `test for eSIM for Japan having validity of 7 days`

- **Search for Country**: Searches for eSIM available in Japan.
- **Select Locale eSIM**: Selects local eSIM for Japan.
- **Select eSIM Based on Validity**: Filters eSIM based on a validity period of 7 days.
- **Verify Package Details**: Asserts that the package details match the expected values:
    - **Title**: Moshi Moshi
    - **Coverage**: Japan
    - **Data**: 1 GB
    - **Validity**: 7 Days
    - **Price**: $4.50 USD

### Utility Functions

- `gotoAiraloLandingPage(page, context)`: Navigates to the Airalo landing page.
- `searchForCountry(page, country)`: Searches for eSIM available in the specified country.
- `selecteSIMBasedOnValidity(page, validity)`: Selects eSIM based on the specified validity period.
- `selectFirsteSIM(page)`: Selects the first available eSIM.
- `selectLocaleSIM(page, locale)`: Selects eSIM based on the specified locale.
- `verifyPackageDetails(page, packageDetails)`: Verifies that the displayed package details match the expected values.

### Test Report
Test report is saved in playwright-report folder.
Inorder to open the test report from terminal use the following command

```bash
npx playwright show-report
```

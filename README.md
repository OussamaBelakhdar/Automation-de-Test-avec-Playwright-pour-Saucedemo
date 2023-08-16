# Automation-de-Test-avec-Playwright-pour-Saucedemo
Saucedemo Automation with Playwright
This project provides a script to automate user interface tests for the Saucedemo website using Playwright. It simulates typical user actions like logging in, adding items to the cart, and logging out, while verifying the site responds as expected.

Requirements :
- Node.js
- npm

Basic Installation :
- Clone the repository:
git clone https://github.com/OussamaBelakhdar/Automation-de-Test-avec-Playwright-pour-Saucedemo

- Navigate to the project directory:
cd Automation-de-Test-avec-Playwright-pour-Saucedemo

- Install the dependencies:
npm install

- Running the Tests
Run the tests:
npx playwright test

- Test Details
The automated script performs the following actions on the saucedemo.com site:

Logs in using the credentials standard_user and secret_sauce.
Adds multiple items to the cart.
Proceeds with the checkout process.
Fills in the shipping details.
Completes the order.
Logs out.

Advanced Configuration
Playwright supports multiple browsers out-of-the-box (Chromium, Firefox, and Webkit). To specify a different browser for your tests, you can pass the --project flag:

npx playwright test --project=firefox
To execute tests in headless mode (no browser UI), you can set the headless option in the Playwright config file to true.

Contribution
Contributions to this project are welcomed! Whether you want to add features, fix bugs, or improve documentation, feel free to create a pull request. Please ensure your contributions are well-tested and documented.

License
This project is licensed under the MIT License.

Contact
If you have any questions or suggestions regarding this project, feel free to open an issue or contact the maintainer at oussamabelakhdar@gmail.com.

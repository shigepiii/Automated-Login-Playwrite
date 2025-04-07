

# `Automated-Login-Playwrite`
# Overview
This project demonstrates an automated login test script using Playwright, a Node.js library for browser automation. The test checks whether the login functionality works as expected on a web application. It simulates user interactions and ensures that login functionality behaves correctly by verifying that users can log in successfully with valid credentials and are redirected to the correct page.

---
# Features
- Automated login test using Playwright
- Supports configuration with environment variables for flexibility
- Includes test scripts for easy execution and modification
- Example test for validating login functionality on a web application

---
# Prerequisites
To run this project, you need to have the following software installed:
- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager)
- **Playwright** (for browser automation)

---
# Setup

 1. Clone the Repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/your-username/automated-login-playwright.git
```

2. Install Dependencies
Navigate to the project folder and install the necessary dependencies:

```
cd automated-login-playwright
npm install
```

3. Configuration
Make sure to configure your environment variables in the example_config. js file or directly in your environment for better flexibility. The configuration file should include your login URL, username, and password.

```module. exports = {
loginUrl: 'https://example.com/login'
username: 'your-username',
password: 'your-password'
};
```

---
# Usage
1. Run the Tests
Once the setup is complete, you can run the test script using the following command:

```npm run test```

The test will open a browser, navigate to the login page, input the username and password, and verify whether the login process completes successfully.

2. Customizing the Test

You can modify the test case in the example_loginTest. js file to test different scenarios (e.g., invalid login, forgotten password). Make sure the selectors in the script match the elements on your web application's login page.

---
   # Technologies
- *Playwrite*
- *Node.js*
- *JavaScript*
• npm

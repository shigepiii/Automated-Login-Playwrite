// example_loginTest.js
const { chromium } = require('playwright');

(async () => {
 const browser = await chromium.launch();
 const page = await browser.newPage();

 // 訪問するターゲットURL
 await page.goto('https://example.com/login');

 // ログインフォームにユーザー名とパスワードを入力
 await page.fill('#username', 'your-username');
 await page.fill('#password', 'your-password');

 // ログインボタンをクリック
 await page.click('#login-button');

 // ログイン成功確認
 const loginSuccess = await page.isVisible('#dashboard');
 console.log(loginSuccess ? 'Login successful' : 'Login failed');

 await browser.close();
})();

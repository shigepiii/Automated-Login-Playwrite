// example_testScript.js
const { chromium } = require('playwright');
const config = require('./example_config');

(async () => {
 const browser = await chromium.launch();
 const page = await browser.newPage();

 // 設定ファイルからURLとログイン情報を取得
 await page.goto(config.loginUrl);
 await page.fill('#username', config.username);
 await page.fill('#password', config.password);

 // ログインボタンをクリック
 await page.click('#login-button');

 // ログイン成功確認
 const loginSuccess = await page.isVisible('#dashboard');
 console.log(loginSuccess ? 'Login successful' : 'Login failed');

 await browser.close();
})();

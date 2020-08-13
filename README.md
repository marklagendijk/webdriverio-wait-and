# webdriverio-wait-and [![GitHub license](https://img.shields.io/github/license/marklagendijk/webdriverio-wait-and)](https://github.com/marklagendijk/webdriverio-wait-and/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/webdriverio-wait-and)](https://www.npmjs.com/package/webdriverio-wait-and)

Custom commands for WebdriverIO to wait for the element to be there, before doing an action on it.

## Usage

In your `wdio.conf.js`:

```js
before () {
    require('webdriverio-wait-and');
},
```

In your `tsconfig.json` add `webdriverio-wait-and` to the `types` array.

In your tests:

```js
$(".my-element").waitAnd().click();
$(".my-element").waitAndClick();
$(".my-element").waitAndSetValue("some value");
```

## Also see

Be sure to also use [expect-webdriver](https://www.npmjs.com/package/expect-webdriverio), which contains useful expectation helpers, that will wait for the condition to become true.

If you need to ensure that you are on a certain page you should use something like this:

```js
expect(browser).toHaveUrlContaining("/my/page.html");
```

## Why

Webtests are often flaky unless you wait for the elements to be there, before interacting with them. Because of this frameworks like Cypress do this by default.

In WebdriverIO the default solution for this is messy, and clutters up the code:

```js
const element = $(".my-element");
element.waitForClickable();
element.click();
```

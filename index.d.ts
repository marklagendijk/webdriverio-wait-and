declare namespace WebdriverIO {
    interface Element {
        /**
         * Chainable alternative to Element.waitForClickable
         */
        waitAnd(options?: WebdriverIO.WaitForOptions): WebdriverIO.Element;
        /**
         * Waits until the element is clickable, and clicks it
         */
        waitAndClick(): void;
        /**
         * Waits until the element is clickable, and sets a value
         */
        waitAndSetValue(value: string): void;
    }
}
# acceptance tests using CodeceptJS with Puppeteer
E2E testing app wikium.ru with CodeceptJS and Puppeteer helper

#### dependencies:
* npm
* codeceptjs
* puppeteer
    ```
    apt install npm
    npm install npm -g
    npm install -g codeceptjs puppeteer
    ```
#### invoke:
1. clone the repository
2. execute tests
    ```
    git clone https://github.com/storenth/codeceptjs-puppeteer-wikium.git
    codeceptjs run --steps
    ```
#### defaults:
* tests runs inside headless Chrome
* custom coverage based on used bytes of the each .js included
* to extend with istanbul report further work required

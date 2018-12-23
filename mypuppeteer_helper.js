
class MyPuppeteer extends Helper {

  async setPageSize() {
    const page = this.helpers['Puppeteer'].page;
    await page.emulateMedia('screen');
    return page.setViewport({width:1300, height: 600});
  }
  
  async startCoverage() {
    const page = this.helpers['Puppeteer'].page;
    // Enable both JavaScript and CSS coverage
    await Promise.all([
      page.coverage.startJSCoverage(),
      // page.coverage.startCSSCoverage()
    ]);
  }
  
  // coverage in percent based on all `*.js` instrumented
  async stopCoverage() {
    const page = this.helpers['Puppeteer'].page;
    // const pti = require('/home/storenth/.nvm/versions/node/v11.5.0/lib/node_modules/puppeteer-to-istanbul')
    // Disable both JavaScript and CSS coverage
    const [jsCoverage] = await Promise.all([
      page.coverage.stopJSCoverage(),
      // page.coverage.stopCSSCoverage(),
    ]);
    let totalBytes = 0;
    let usedBytes = 0;
    const coverage = [...jsCoverage];
    for (const entry of coverage) {
      totalBytes += entry.text.length;
      for (const range of entry.ranges){
        usedBytes += range.end - range.start - 1;
      }
    }
    console.log(`Bytes used: ${usedBytes / totalBytes * 100}%`);
  }
  
  async pressKeyLeft()  {
    const page = this.helpers['Puppeteer'].page;
    await page.keyboard.press('ArrowLeft');
  }

  async pressKeyRight()  {
    const page = this.helpers['Puppeteer'].page;
    await page.keyboard.press('ArrowRight');
  }

}

module.exports = MyPuppeteer;

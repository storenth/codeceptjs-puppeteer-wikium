/// <reference path="./steps.d.ts" />

// Kirill Zhdanov for Wikium 21.12.2018 Copyrighted

Feature('Thinking game');

Before((I) => {
    I.startCoverage();
    I.amOnPage('https://wikium.ru/');
});

After((I) => {
    I.stopCoverage();
});

// Page Object, Random email generator, iframe handler, low-level keyboard interactions
Scenario('One of the most business value case @sanity', (I, mainPage, generateRandomEmailStep) => {
    I.say('I am going to start trainning');
    let email = generateRandomEmailStep.generateEmail();
    I.say('Change language!');
    mainPage.changeLanguage("English");
    I.wait(4)
    I.click("Start training");
    I.see("Which attention skills would you like to develop?", '.skill__title');
    I.click("Stop becoming distracted by outside interference and irritants", '.skill__label');
    I.click("Continue");
    
    I.see("Which memory skills would you like to develop?", '.skill__title');
    I.click("Get rid of forgetfulness and absent-mindedness");
    I.click("Continue");
    
    I.see("Which thinking skills would you like to develop?", '.skill__title');
    I.click("React more quickly in critical situations");
    I.click("Continue");
    
    I.fillField("Form_User_RegisterNoPasswordForm[email]", email);
    I.click("Sign up");
    I.retry(3).see("Test your skills");
    I.retry(3).click("Start the test")

    within({frame: "iframe"}, () => {
        // to load iframe properly
        I.wait(5);
        I.retry(3).see('START');
        I.see("Speed sorting");
        I.click('Start', {css: "body > wg-game-pages > div > div:nth-child(1) > section > div.game-screen__content > a"});
        I.retry(1).see("Sort the inhabitants of the universe according to their home planets as accurately and fast as possible.");
        I.click('Undergo training', "body > wg-game-pages > div > div:nth-child(4) > section > div > div > button");
        I.pressKeyLeft();
        // to slow down key pressed wait for ~2 sec
        I.wait(2);
        I.pressKeyRight();
        // ready to play after 3,2,1 go!
        I.wait(3);
        // wait for timer in iframe
        I.waitForElement('body > wg-game-pages > div > div:nth-child(1) > div > div > div > wg-menu > div > wg-menu-time-left > div', 5);
        I.say("lets some interaction");
        // to slow down key pressed wait for ~2 sec
        I.wait(2);
        I.pressKeyLeft();
        I.wait(2);
        I.pressKeyRight();
        I.say("wait for timer become invisible");
        I.waitForInvisible('body > wg-game-pages > div > div:nth-child(1) > div > div > div > wg-menu > div > wg-menu-time-left > div', 70);
        I.waitForElement('body > wg-game-pages > div > div:nth-child(1) > section > div.game-screen__heading > h3', 10);
        I.say("wait for iframe load properly");
        I.wait(3);
        I.retry(2).see("Your results");
        I.say("That's enough for today");
      });
});
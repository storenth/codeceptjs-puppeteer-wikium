/// <reference path="./steps.d.ts" />

// Kirill Zhdanov for Wikium 21.12.2018 Copyrighted

Feature('Localization testing');

Before((I) => {
    I.startCoverage();
    I.amOnPage('https://wikium.ru/');
});

After((I) => {
    I.stopCoverage();
});


// DataDriven and PageObject model
Data(["English", "Русский"])
.Scenario('test check language @lang', (I, mainPage, current) => {
    I.say('I am going to change language');
    mainPage.changeLanguage(current);
});

// Non ASCII (RUS) interactions example
Scenario('Русскоязычный тестовый сценарий @rus', (I, mainPage) => {
    I.say('Я меняю язык на Русский!');
    mainPage.changeLanguage("Русский");
    I.wait(4)
    I.see("Тренируйте мозг с удовольствием", "#landing-header > div:nth-child(2) > div.landing-header__text > h1");
    I.see("НАЧАТЬ РАЗВИВАТЬСЯ");
    I.click("НАЧАТЬ РАЗВИВАТЬСЯ");
    I.see("Какие навыки внимания вы хотели бы развить?");
    I.click("Перестать отвлекаться на внешние помехи и раздражители");
    I.click("Продолжить");
    I.click("Избавиться от забывчивости и рассеяности");
    I.click("Продолжить");
    I.click("Быстрее реагировать в критических ситуациях");
    I.click("Продолжить");
    I.see("Зарегистрируйтесь");
    I.say("Это был пример автоматизации с non-ASCII");
});
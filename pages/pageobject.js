
const I = actor();

module.exports = {

  // Main page methods

  changeLanguage(language) {
    I.seeElement("#lang-select");
    I.click('#lang-select');
    I.click(language)
    I.see(language, ".custom-select__placeholder")
  }
}
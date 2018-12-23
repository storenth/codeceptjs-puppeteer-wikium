
const I = actor();

module.exports = {
  // step to generate test email

  generateEmail() {
    let random_email_head = Math.random().toString(36).substr(2, 5);
    let random_email_tail = "@mail.ru";
    let random_email = random_email_head.concat('', random_email_tail);
    return random_email
  }

};

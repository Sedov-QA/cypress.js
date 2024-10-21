describe('Проверка авторизации', function () {

    it('Напиши проверку на позитивный кейс авторизации:', function () {
         cy.visit('https://login.qa.studio/'); // Зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru') // Ввел верный логин
         cy.get('#pass').type('iLoveqastudio1') // Ввел верный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти
         cy.get('#messageHeader').should('be.visible').contains('Авторизация прошла успешно'); // Проверил нужный текст и видимость
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил наличиние кнопки и видимость
     })

    it('Напиши автотест на проверку логики восстановления пароля:', function () {
         cy.visit('https://login.qa.studio/'); // Зашел на сайт
         cy.get('#forgotEmailButton').click(); // Нажал "Забыли пароль"
         cy.get('#mailForgot').type('vitya.sed@yandex.ru') // Ввел имейл
         cy.get('#restoreEmailButton').click(); // Отправил код на имейл
         cy.get('#messageHeader').should('be.visible').contains('Успешно отправили пароль на e-mail'); // Проверил нужный текст и видимость
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил наличиние кнопки и видимость
     })
    
    it('Напиши проверку на негативный кейс авторизации:', function () {
         cy.visit('https://login.qa.studio/'); // Зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru') // Ввел верный логин
         cy.get('#pass').type('Loveqastudio') // Ввел неверный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти
         cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет'); // Проверил нужный текст и видимость
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил наличиние кнопки и видимость
     })

    it('Напиши проверку на негативный кейс авторизации:', function () {
         cy.visit('https://login.qa.studio/'); // Зашел на сайт
         cy.get('#mail').type('vitya.sed@yandex.ru') // Ввел неверный логин
         cy.get('#pass').type('iLoveqastudio1') // Ввел верный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти
         cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет'); // Проверил нужный текст и видимость
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил наличиние кнопки и видимость
     })

        it('Напиши проверку на негативный кейс валидации:', function () {
         cy.visit('https://login.qa.studio/'); // Зашел на сайт
         cy.get('#mail').type('germandolnikov.ru') // Ввел логин без @
         cy.get('#pass').type('iLoveqastudio1') // Ввел верный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти
         cy.get('#messageHeader').should('be.visible').contains('Нужно исправить проблему валидации'); // Проверил нужный текст и видимость
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил наличиние кнопки и видимость
     })

        it('Напиши проверку на приведение к строчным буквам в логине:', function () {
         cy.visit('https://login.qa.studio/'); // Зашел на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru') // Ввел логин с верхним регистром
         cy.get('#pass').type('iLoveqastudio1') // Ввел верный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти
         cy.get('#messageHeader').should('be.visible').contains('Авторизация прошла успешно'); // Проверил нужный текст и видимость
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил наличиние кнопки и видимость
     })

    it('Напиши один длинный автотест для Покемонов', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Зашел на сайт
         cy.get(':nth-child(1) > .auth__input').type('vitya.sed@yandex.ru') // Ввел имейл
         cy.get('#password').type('03ezuhed72FF6?') // Ввел пароль
         cy.get('.auth__button').click(); // Нажал кнопку "войти"
         cy.get('.header__container > .header__id').click(); // Нажал на свой профиль
         cy.get('[href="/shop"]').click(); // Нажал на кнопку "Смена аватара"
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     })    
})

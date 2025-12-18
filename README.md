# Описание проекта

В рамках данного проекта разработан простейший мессенджер. 

## Первый спринт

- были разработаны прототипы экранов проекта;
- подключен сборщик Vite;
- используется препроцессор SASS;
- используется TypeScript;
- сверстаны страницы и компоненты с использованием шаблонизатора Handlebars;
- проект разбит на модули;
- деплой с помощью Netlify.

## Второй спринт

- внедрён компонентный подход
и реализованы классы [Block](/src/framework/block.ts) и [EventBus](/src/framework/event-bus.ts);
- в console.log выводится объект формы со всеми заполненными полями;
- добавлен единый механизм валидации по событиям blur и submit с использованием регулярных выражений;
- доработана страница чатов и ленты переписки;
- реализован класс [HTTPTransport](/src/framework/http-transport.ts) для работы с `GET`, `PUT`, `POST` и `DELETE`
запросами, используя инструменты `Promise` и `XHR`;
- код проекта стал единообразным, настроены `ESlint` ([eslintconfig.js](eslint.config.js)),
`Stylelint` ([stylelint.config.js](stylelint.config.js)) и ([.editorconfig](.editorconfig)).

# Запуск проекта

Перед запуском нужно установить зависимости с помощью команды `npm install`.
Сборка и запуск проекта выполняются по команде `npm run start`.
Для запуска проекта в режиме разработки использовать `npm run dev`.

Проект запускается на `3000` порту.

# Ссылки на страницы
- [Страница авторизации](/src/pages/login/login.hbs)
- [Страница регистрации](/src/pages/registration/registration.hbs)
- [Страница со списком чатов и лентой переписки](/src/pages/chat-list/chat-list.hbs)
- [Страница пользователя с возможностью редактирования данных](/src/pages/profile/profile.hbs)
- [Страница 404](/src/pages/page404/page404.hbs)
- [Страница 5**](/src/pages/page500/page500.hbs)

# Ссылка на Netlify

https://silly-travesseiro-22261c.netlify.app/

import {Block} from "../../framework/block.ts";
import {ButtonComponent} from "../../components";
import {FormComponent} from "../../components";
import {loginValidator, passwordValidator} from "../../validation";

export class LoginPageComponent extends Block {
    constructor() {
        super({
            loginForm: new FormComponent({
                title: "Вход",
                formFields: [
                    {
                        id: "loginAuthField",
                        type: "text",
                        label: "Логин",
                        name: "login",
                        validator: loginValidator,
                    },
                    {
                        id: "passwordAuthField",
                        type: "password",
                        label: "Пароль",
                        name: "password",
                        validator: passwordValidator,
                    }
                ],
                submitButton: {
                    label: "Авторизоваться",
                },
            }),
            registerButton: new ButtonComponent({
                label: "Нет аккаунта?",
            }),
        });
    }

    public override render() {
        return `
            <main id="app">
                <div class="login-page">
                    <div class="login-page__wrapper">
                        {{{ loginForm }}}
                        {{{ registerButton }}}
                    </div>
                </div>
            </main>`;
    }
}

import {Block} from "../../framework/block.ts";
import {FormFieldComponent} from "../../components/form-field/form-field.ts";
import {ButtonComponent} from "../../components/button/button.ts";

export class LoginPageComponent extends Block {
    constructor() {
        super({
            LoginFormField: new FormFieldComponent({
                id: "loginAuthField",
                type: "text",
                label:"Логин",
                name: "login",
            }),
            PasswordFormField: new FormFieldComponent({
                id: "passwordAuthField",
                type: "password",
                label:"Пароль",
                name: "password",
            }),
            AuthButton: new ButtonComponent({
                id: "authButton",
                label: "Авторизоваться",
            }),
            RegisterButton: new ButtonComponent({
                id: "noAccountButton",
                label: "Нет аккаунта?",
            }),
        });
    }

    public override render() {
        return `
            <main class="app">
                <div class="login-page">
                    <form class="login-page__form form">
                        <div class="form__title">Вход</div>
                        <div class="form__inputs">
                            {{{ LoginFormField }}}
                            {{{ PasswordFormField }}}
                        </div>
                        <div class="form__buttons">
                            {{{ AuthButton }}}
                            {{{ RegisterButton }}}
                        </div>
                    </form>
                </div>
            </main>`;
    }
}

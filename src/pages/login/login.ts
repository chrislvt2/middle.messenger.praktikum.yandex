import {Block} from "../../framework/block.ts";
import {ButtonComponent} from "../../components";
import {FormComponent} from "../../components";
import {loginValidator, passwordValidator} from "../../validation";
import {Router} from "../../framework/router.ts";
import {ROUTES} from "../../models/router.model.ts";

export class LoginPageComponent extends Block {
    constructor() {
        const router = new Router();
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
                    onClick: (): void => {
                        router.go(ROUTES.CHAT_LIST);
                    },
                },
            }),
            registerButton: new ButtonComponent({
                label: "Нет аккаунта?",
                onClick: (): void => {
                    router.go(ROUTES.REGISTRATION);
                },
            }),
        });
    }

    public override render(): string {
        return `
                <div class="login-page">
                    <div class="login-page__wrapper">
                        {{{ loginForm }}}
                        {{{ registerButton }}}
                    </div>
                </div>`;
    }
}

import {Block} from "../../framework/block.ts";
import {ButtonComponent} from "../../components";
import {FormComponent} from "../../components";
import {emailValidator, loginValidator, nameValidator, passwordValidator, phoneValidator} from "../../validation";

export class RegistrationPageComponent extends Block {
    constructor() {
        super({
            registrationForm: new FormComponent({
                title: "Регистрация",
                formFields: [
                    {
                        id: "emailRegField",
                        type: "email",
                        label: "Почта",
                        name: "email",
                        validator: emailValidator,
                    },
                    {
                        id: "loginRegField",
                        type: "text",
                        label: "Логин",
                        name: "login",
                        validator: loginValidator,
                    },
                    {
                        id: "first_nameRegField",
                        type: "text",
                        label: "Имя",
                        name: "first_name",
                        validator: nameValidator,
                    },
                    {
                        id: "second_nameRegField",
                        type: "text",
                        label: "Фамилия",
                        name: "second_name",
                        validator: nameValidator,
                    },
                    {
                        id: "phoneRegField",
                        type: "tel",
                        label: "Телефон",
                        name: "phone",
                        validator: phoneValidator,
                    },
                    {
                        id: "passwordRegField",
                        type: "password",
                        label: "Пароль",
                        name: "password",
                        validator: passwordValidator,
                    },
                    {
                        id: "password_confirmRegField",
                        type: "password",
                        label: "Пароль (ещё раз)",
                        name: "password_confirm",
                        validator: passwordValidator,
                    },
                ],
                submitButton: {
                    label: "Зарегестрироваться",
                },
            }),
            returnToLoginButton: new ButtonComponent({
                label: "Войти",
            }),
        });
    }

    public override render() {
        return `
            <main id="app">
                <div class="login-page">
                    <div class="login-page__wrapper">
                        {{{ registrationForm }}}
                        {{{ returnToLoginButton }}}
                    </div>
                </div>
            </main>`;
    }
}

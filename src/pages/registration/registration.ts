import {Block} from "../../framework/block.ts";
import {FormFieldComponent} from "../../components/form-field/form-field.ts";
import {ButtonComponent} from "../../components/button/button.ts";

export class RegistrationPageComponent extends Block {
    constructor() {
        super({
            EmailFormField: new FormFieldComponent({
                id: "emailRegField",
                type: "email",
                label: "Почта",
                name: "email",
            }),
            LoginFormField: new FormFieldComponent({
                id: "loginRegField",
                type: "text",
                label: "Логин",
                name: "login",
            }),
            FirstNameFormField: new FormFieldComponent({
                id: "first_nameRegField",
                type: "text",
                label: "Имя",
                name: "first_name",
            }),
            SecondNameFormField: new FormFieldComponent({
                id: "second_nameRegField",
                type: "text",
                label: "Фамилия",
                name: "second_name",
            }),
            PhoneFormField: new FormFieldComponent({
                id: "phoneRegField",
                type: "tel",
                label: "Телефон",
                name: "phone",
            }),
            PasswordFormField: new FormFieldComponent({
                id: "passwordRegField",
                type: "password",
                label: "Пароль",
                name: "password",
            }),
            PasswordConfirmFormField: new FormFieldComponent({
                id: "password_confirmRegField",
                type: "password",
                label: "Пароль (ещё раз)",
                name: "password_confirm",
            }),
            RegisterButton: new ButtonComponent({
                id: "registerButton",
                label: "Зарегестрироваться",
            }),
            ReturnToLoginButton: new ButtonComponent({
                id: "returnToLogin",
                label: "Войти",
            }),
        });
    }

    public override render() {
        return `
            <main class="app">
                <div class="registration-page">
                    <form class="form">
                        <div class="form__title">Регистрация</div>
                
                        <div class="form__inputs">
                            {{{ EmailFormField }}}
                            {{{ LoginFormField }}}
                            {{{ FirstNameFormField }}}
                            {{{ SecondNameFormField }}}
                            {{{ PhoneFormField }}}
                            {{{ PasswordFormField }}}
                            {{{ PasswordConfirmFormField }}}
                        </div>
                
                        <div class="form__buttons">
                            {{{ RegisterButton }}}
                            {{{ ReturnToLoginButton }}}
                        </div>
                    </form>
                </div>
            </main>`;
    }
}

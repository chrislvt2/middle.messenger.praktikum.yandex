import {Block} from "../../framework/block.ts";
import {FormFieldComponent} from "../../components/form-field/form-field.ts";
import {ButtonComponent} from "../../components/button/button.ts";
import {SidebarButtonComponent} from "../../components/sidebar-button/sidebar-button.ts";

export class ProfilePageComponent extends Block {
    constructor() {
        super({
            profileEditMode: false,
            passwordEditMode: false,

            SidebarButtonComponent: new SidebarButtonComponent({}),

            PasswordFormField: new FormFieldComponent({
                id: "oldPasswordField",
                type: "password",
                label: "Старый пароль",
                name: "oldPassword",
            }),
            NewPasswordFormField: new FormFieldComponent({
                id: "newPasswordField",
                type: "password",
                label: "Новый пароль",
                name: "newPassword",
            }),
            RepeatedNewPasswordFormField: new FormFieldComponent({
                id: "repeatedNewPasswordField",
                type: "password",
                label: "Повторите новый пароль",
                name: "repeatedNewPassword",
            }),

            SavePasswordButton: new ButtonComponent({
                id: "savePasswordButton",
                label: "Сохранить",
                onClick: () => {
                    this.props.passwordEditMode = false;
                },
            }),

            EmailFormField: new FormFieldComponent({
                id: "emailField",
                type: "email",
                label: "Почта",
                name: "email",
                value: "pochta@yandex.ru",
            }),
            LoginFormField: new FormFieldComponent({
                id: "loginField",
                type: "text",
                label: "Логин",
                name: "login",
                value: "ivanivanov",
            }),
            FirstNameFormField: new FormFieldComponent({
                id: "first_nameField",
                type: "text",
                label: "Имя",
                name: "first_name",
                value: "Иван",
            }),
            SecondNameFormField: new FormFieldComponent({
                id: "second_nameField",
                type: "text",
                label: "Фамилия",
                name: "second_name",
                value: "Иванов",
            }),
            DisplayNameFormField: new FormFieldComponent({
                id: "display_nameField",
                type: "text",
                label: "Имя в чате",
                name: "display_name",
                value: "Иван",
            }),
            PhoneFormField: new FormFieldComponent({
                id: "phoneField",
                type: "tel",
                label: "Телефон",
                name: "phone",
                value: "+7 (909) 967 30 30",
            }),

            SaveProfileButton: new ButtonComponent({
                id: "saveProfileButton",
                label: "Сохранить",
                onClick: () => {
                    this.props.profileEditMode = false;
                },
            }),

            EditProfileButton: new ButtonComponent({
                id: "editProfileButton",
                label: "Изменить данные",
                onClick: () => {
                    this.props.profileEditMode = true;
                },
            }),
            EditPasswordButton: new ButtonComponent({
                id: "editPasswordButton",
                label: "Изменить пароль",
                onClick: () => {
                    this.props.passwordEditMode = true;
                },
            }),
            ExitPasswordButton: new ButtonComponent({
                id: "exitProfileButton",
                label: "Выйти",
            }),
        });
    }

    public override render() {
        return `
            <main class="app">
                <div class="profile-page">
                    {{{ SidebarButtonComponent }}}
                    <div class="profile-page__content">
                        <div class="profile-page__profile">
                            {{{ AvatarComponent }}}
                            <div class="profile-page__profile-title">Иван</div>
                            {{#if passwordEditMode}}
                                 <form class="profile-page__profile-section">
                                    {{{ PasswordFormField }}}
                                    {{{ NewPasswordFormField }}}
                                    {{{ RepeatedNewPasswordFormField }}}
                                </form>
                                <div class="profile-page__profile-section">
                                    {{{ SavePasswordButton }}}
                                </div>
                            {{else}}  
                                <form class="profile-page__profile-section"
                                      id="profileForm"
                                >
                                    {{{ EmailFormField }}}
                                    {{{ LoginFormField }}}
                                    {{{ FirstNameFormField }}}
                                    {{{ SecondNameFormField }}}
                                    {{{ DisplayNameFormField }}}
                                    {{{ PhoneFormField }}}
                                </form>
                                {{#if profileEditMode}}
                                    <div class="profile-page__profile-section">
                                        {{{ SaveProfileButton }}}
                                    </div>
                                {{else}}    
                                    <div class="profile-page__profile-section">
                                        {{{ EditProfileButton }}}
                                        {{{ EditPasswordButton }}}
                                        {{{ ExitPasswordButton }}}
                                    </div>
                                {{/if}}  
                            {{/if}}    
                        </div>
                    </div>
                </div>
            </main>`;
    }
}

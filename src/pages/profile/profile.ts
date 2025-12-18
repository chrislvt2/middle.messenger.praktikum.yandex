import {Block} from "../../framework/block.ts";
import {ButtonComponent} from "../../components/button/button.ts";
import {SidebarButtonComponent} from "../../components/sidebar-button/sidebar-button.ts";
import {FormComponent} from "../../components/form/form.ts";
import {AvatarComponent} from "../../components/avatar/avatar.ts";
import {emailValidator, loginValidator, nameValidator, passwordValidator, phoneValidator} from "../../validation";

export class ProfilePageComponent extends Block {
    constructor() {
        super({
            profileEditMode: false,
            passwordEditMode: false,
            profileForm: new FormComponent({
                class: "_disabled",
                formFields: [
                    {
                        id: "emailField",
                        type: "email",
                        label: "Почта",
                        name: "email",
                        value: "pochta@yandex.ru",
                        validator: emailValidator,
                    },
                    {
                        id: "loginField",
                        type: "text",
                        label: "Логин",
                        name: "login",
                        value: "ivanivanov",
                        validator: loginValidator,
                    },
                    {
                        id: "first_nameField",
                        type: "text",
                        label: "Имя",
                        name: "first_name",
                        value: "Иван",
                        validator: nameValidator,
                    },
                    {
                        id: "second_nameField",
                        type: "text",
                        label: "Фамилия",
                        name: "second_name",
                        value: "Иванов",
                        validator: nameValidator,
                    },
                    {
                        id: "display_nameField",
                        type: "text",
                        label: "Имя в чате",
                        name: "display_name",
                        value: "Иван",
                    },
                    {
                        id: "phoneField",
                        type: "tel",
                        label: "Телефон",
                        name: "phone",
                        value: "+79991234567",
                        validator: phoneValidator,
                    },
                ],
                submitButton: {
                    label: "Сохранить",
                },
                submitAction: () => {
                    this.setProps({profileEditMode: false});
                    this.children.profileForm.setProps({
                        submitVisible: false,
                        class: "_disabled",
                    });
                },
                submitVisible: false,
            }),
            passwordForm: new FormComponent({
               formFields: [
                   {
                      id: "oldPasswordField",
                      type: "password",
                      label: "Старый пароль",
                      name: "oldPassword",
                      validator: passwordValidator,
                   },
                   {
                        id: "newPasswordField",
                        type: "password",
                        label: "Новый пароль",
                        name: "newPassword",
                        validator: passwordValidator,
                   },
                   {
                       id: "repeatedNewPasswordField",
                       type: "password",
                       label: "Повторите новый пароль",
                       name: "repeatedNewPassword",
                       validator: passwordValidator,
                   },
               ],
               submitButton: {
                   label: "Сохранить",
               },
               submitAction: () => { this.setProps({passwordEditMode: false}); }
            }),
            avatarComponent: new AvatarComponent({}),
            sidebarButtonComponent: new SidebarButtonComponent({}),
            editProfileButton: new ButtonComponent({
                id: "editProfileButton",
                label: "Изменить данные",
                onClick: () => {
                    this.props.profileEditMode = true;
                    this.children.profileForm.setProps({
                        submitVisible: true,
                        class: "",
                    });
                },
            }),
            editPasswordButton: new ButtonComponent({
                label: "Изменить пароль",
                onClick: () => {
                    this.props.passwordEditMode = true;
                },
            }),
            exitPasswordButton: new ButtonComponent({
                id: "exitProfileButton",
                label: "Выйти",
            }),
        });
    }

    public override render() {
        return `
            <main id="app">
                <div class="profile-page">
                    {{{ sidebarButtonComponent }}}
                    <div class="profile-page__content">
                        <div class="profile-page__profile">
                            {{{ avatarComponent }}}
                            <div class="profile-page__profile-title">Иван</div>
                            {{#if passwordEditMode}}
                                 {{{ passwordForm }}}
                            {{else}}
                                {{{ profileForm }}}
                                {{#unless profileEditMode}}
                                    <div class="profile-page__profile-section">
                                        {{{ editProfileButton }}}
                                        {{{ editPasswordButton }}}
                                        {{{ exitPasswordButton }}}
                                    </div>
                                {{/unless}}
                            {{/if}}
                        </div>
                    </div>
                </div>
            </main>`;
    }
}

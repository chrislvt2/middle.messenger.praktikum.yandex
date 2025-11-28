import Handlebars from 'handlebars';
import * as Pages from './pages';
import * as Components from './components';

interface StateModel {
    page: string;
}

Handlebars.registerPartial('form-field', Components.FormField);
Handlebars.registerPartial('button', Components.Button);
Handlebars.registerPartial('sidebar-button', Components.SidebarButton);
Handlebars.registerPartial('error', Components.Error);
Handlebars.registerPartial('avatar', Components.Avatar);
Handlebars.registerPartial('search-field', Components.SearchField);

export default class App {
    public app: HTMLElement | null;

    public state: StateModel = {
        page: "chatListPage",
    };

    private profileEditMode: boolean = false;
    private passwordEditMode: boolean = false;

    constructor() {
        this.app = document.getElementById('app');
        this.initEventListeners();

    }

    public render(): void {
        if (this.app === null) {
            return;
        }

        let template;
        let additionalData = {};
        if (this.state.page === 'loginPage') {
            template = Handlebars.compile(Pages.LoginPage);
        } else if (this.state.page === 'registrationPage') {
            template = Handlebars.compile(Pages.RegistrationPage);
        } else if (this.state.page === 'chatListPage') {
            template = Handlebars.compile(Pages.ChatListPage);
        } else if (this.state.page === 'profilePage') {
            template = Handlebars.compile(Pages.ProfilePage);
            additionalData = {
                profileEditMode: this.profileEditMode,
                passwordEditMode: this.passwordEditMode,
            };
        } else if (this.state.page === '404Page') {
            template = Handlebars.compile(Pages.Page404);
        } else if (this.state.page === '500Page') {
            template = Handlebars.compile(Pages.Page500);
        }
        else {
            template = Handlebars.compile(Pages.Page404);
        }
        this.app.innerHTML = template(additionalData);
        this.initButtonActions();
    }

    public initEventListeners(): void {
        const navigationItems = document.querySelectorAll('.navigation');
        navigationItems.forEach(item => {
            item.addEventListener('click', (e: Event) => {
                e.preventDefault();
                this.changePage(e.target.dataset.page);
            });
        });
    }

    public initButtonActions(): void {
        if (this.state.page === 'loginPage') {
            const authButton = document.getElementById('authButton');
            authButton && authButton.addEventListener('click', () => this.changePage('chatListPage'));

            const noAccountButton = document.getElementById('noAccountButton');
            noAccountButton && noAccountButton.addEventListener('click', () => this.changePage('registrationPage'));
        }

        if (this.state.page === 'registrationPage') {
            const registerButton = document.getElementById('registerButton');
            registerButton && registerButton.addEventListener('click', () => this.changePage('chatListPage'));

            const returnToLogin = document.getElementById('returnToLogin');
            returnToLogin && returnToLogin.addEventListener('click', () => this.changePage('loginPage'));
        }


        if (this.state.page === '404Page') {
            const page400ReturnToChatListButton = document.getElementById('page400ReturnToChatListButton');
            page400ReturnToChatListButton.addEventListener('click', () => this.changePage('chatListPage'));
        }

        if (this.state.page === '500Page') {
            const page500ReturnToChatListButton = document.getElementById('page500ReturnToChatListButton');
            page500ReturnToChatListButton.addEventListener('click', () => this.changePage('chatListPage'));
        }

        if (this.state.page === 'profilePage') {
            const inputs = document.getElementById('profileForm')?.querySelectorAll('input');
            inputs && inputs.forEach(input => {
                input.readOnly = !this.profileEditMode;
            });

            const editProfileButton = document.getElementById('editProfileButton');
            editProfileButton && editProfileButton.addEventListener('click', () => {
                this.profileEditMode = true;
                this.render();
            });

            const saveProfileButton = document.getElementById('saveProfileButton');
            saveProfileButton && saveProfileButton.addEventListener('click', () => {
                this.profileEditMode = false;
                this.render();
            });

            const editPasswordButton = document.getElementById('editPasswordButton');
            editPasswordButton && editPasswordButton.addEventListener('click', () => {
                this.passwordEditMode = true;
                this.render();
            });

            const savePasswordButton = document.getElementById('savePasswordButton');
            savePasswordButton && savePasswordButton.addEventListener('click', () => {
                this.passwordEditMode = false;
                this.render();
            });

            const exitProfileButton = document.getElementById('exitProfileButton');
            exitProfileButton && exitProfileButton.addEventListener('click', () => {
                this.changePage('chatListPage');
            });
        }
    }

    private changePage(page: string): void {
        this.state.page = page;
        this.render();
    }
}
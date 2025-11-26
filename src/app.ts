import Handlebars from 'handlebars';
import * as Pages from './pages';
import * as Components from './components';

interface StateModel {
    page: string;
}

Handlebars.registerPartial('form-field', Components.FormField);
Handlebars.registerPartial('button', Components.Button);
Handlebars.registerPartial('text-field', Components.TextField);
Handlebars.registerPartial('sidebar-button', Components.SidebarButton);
Handlebars.registerPartial('error', Components.Error);


export default class App {
    public app: HTMLElement | null;

    public state: StateModel = {
        page: "404Page",
    };

    constructor() {
        this.app = document.getElementById('app');
        this.initEventListeners();

    }

    public render(): void {
        if (this.app === null) {
            return;
        }

        let template;
        if (this.state.page === 'loginPage') {
            template = Handlebars.compile(Pages.LoginPage);
        } else if (this.state.page === 'authPage') {
            template = Handlebars.compile(Pages.AuthPage);
        } else if (this.state.page === 'chatListPage') {
            template = Handlebars.compile(Pages.ChatListPage);
        } else if (this.state.page === 'profilePage') {
            template = Handlebars.compile(Pages.ProfilePage);
        } else if (this.state.page === '404Page') {
            template = Handlebars.compile(Pages.Page404);
        } else if (this.state.page === '500Page') {
            template = Handlebars.compile(Pages.Page500);
        }
        else {
            template = Handlebars.compile(Pages.LoginPage);
        }
        this.app.innerHTML = template({});
        this.initButtonActions();
    }

    public initEventListeners(): void {
        const navigationItems = document.querySelectorAll('.navigation');
        navigationItems.forEach(item => {
            item.addEventListener('click', (e: Event) => {
                e.preventDefault();
                console.log("Current Page =", e.target.dataset.page);
                this.changePage(e.target.dataset.page);
            });
        });
    }

    public initButtonActions(): void {
        if (this.state.page === '404Page') {
            const page400ReturnToChatListButton = document.getElementById('page400ReturnToChatListButton');
            page400ReturnToChatListButton.addEventListener('click', () => this.changePage('chatListPage'));
        }

        if (this.state.page === '500Page') {
            const page500ReturnToChatListButton = document.getElementById('page500ReturnToChatListButton');
            page500ReturnToChatListButton.addEventListener('click', () => this.changePage('chatListPage'));
        }
    }

    private changePage(page: string): void {
        this.state.page = page;
        this.render();
    }
}
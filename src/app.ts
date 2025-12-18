import {LoginPageComponent} from "./pages/login/login";
import {RegistrationPageComponent} from "./pages/registration/registration.ts";
import {Page404Component} from "./pages/page404/page404.ts";
import {Page500Component} from "./pages/page500/page500.ts";
import {ProfilePageComponent} from "./pages/profile/profile.ts";
import {ChatListPageComponent} from "./pages/chat-list/chat-list.ts";

interface StateModel {
    page: string;
}

export default class App {
    public app: HTMLElement | null;

    public state: StateModel = {
        page: "profilePage",
    };

    constructor() {
        this.app = document.getElementById('app');
        this.initEventListeners();
    }

    public render(): void {
        this.app = document.getElementById('app');
        if (this.state.page === 'loginPage') {
            let p: LoginPageComponent = new LoginPageComponent();
            if (this.app) {
                this.app.replaceWith(p.getContent());
            }
        }
        else if (this.state.page === 'registrationPage') {
            const page: RegistrationPageComponent = new RegistrationPageComponent();
            if (this.app) {
                this.app.replaceWith(page.getContent());
            }
        }
        else if (this.state.page === '404Page') {
            const page: Page404Component = new Page404Component();
            if (this.app) {
                this.app.replaceWith(page.getContent());
            }
        }
        else if (this.state.page === '500Page') {
            const page: Page500Component = new Page500Component();
            if (this.app) {
                this.app.replaceWith(page.getContent());
            }
        }
        else if (this.state.page === 'profilePage') {
            const page: ProfilePageComponent = new ProfilePageComponent();
            if (this.app) {
                this.app.replaceWith(page.getContent());
            }
        }
        else if (this.state.page === 'chatListPage') {
            const page: ChatListPageComponent = new ChatListPageComponent();
            if (this.app) {
                this.app.replaceWith(page.getContent());
            }
        }
    }

    private initEventListeners(): void {
        const navigationItems = document.querySelectorAll('.navigation');
        navigationItems.forEach(item => {
            item.addEventListener('click', (e: Event) => {
                e.preventDefault();
                const target = e.target as HTMLElement;
                if (target.dataset.page) {
                    this.changePage(target.dataset.page);
                }
            });
        });
    }

    private changePage(page: string): void {
        this.state.page = page;
        this.render();
    }
}

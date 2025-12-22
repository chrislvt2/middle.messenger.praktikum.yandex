import * as PAGES from "./pages";
import {Block} from "./framework/block.ts";

interface StateModel {
    page: string;
}

export default class App {
    public app: HTMLElement | null;

    public state: StateModel = {
        page: "loginPage",
    };

    constructor() {
        this.app = document.getElementById('app');
        this.initEventListeners();
    }

    public render(): void {
        this.app = document.getElementById('app');

        let page: Block;
        if (this.state.page === 'loginPage') {
            page = new PAGES.LoginPageComponent();
        } else if (this.state.page === 'registrationPage') {
            page = new PAGES.RegistrationPageComponent();
        } else if (this.state.page === '500Page') {
            page = new PAGES.Page500Component();
        } else if (this.state.page === 'profilePage') {
            page = new PAGES.ProfilePageComponent();
        } else if (this.state.page === 'chatListPage') {
            page = new PAGES.ChatListPageComponent();
        } else {
            page = new PAGES.Page404Component();
        }

        if (this.app) {
            this.app.replaceWith(page.getContent());
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

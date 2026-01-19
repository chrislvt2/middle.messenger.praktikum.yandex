import {Router} from "./framework/router.ts";
import {ROUTES} from "./models/router.model.ts";
import * as PAGES from "./pages";


export default class App {
    public app: HTMLElement | null;

    constructor() {
        this.render();
    }

    public render(): void {
        const router = new Router("#app");

        router
            .use(ROUTES.LOGIN, PAGES.LoginPageComponent)
            .use(ROUTES.REGISTRATION, PAGES.RegistrationPageComponent)
            .use(ROUTES.ERROR_404, PAGES.Page404Component)
            .use(ROUTES.ERROR_500, PAGES.Page500Component)
            .use(ROUTES.PROFILE, PAGES.ProfilePageComponent)
            .use(ROUTES.CHAT_LIST, PAGES.ChatListPageComponent)
            .start();

        // Через секунду контент изменится сам, достаточно дёрнуть переход
        // setTimeout(() => {
        //     router.go(ROUTES.LOGIN);
        // }, 1000);
        //
        // setTimeout(() => {
        //     router.go(ROUTES.REGISTRATION);
        // }, 2000);
        //
        // // А можно и назад
        // setTimeout(() => {
        //     router.back();
        // }, 4000);
    }
}

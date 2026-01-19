import {Route} from "./route.ts";
import type {BlockConstructor} from "./block.ts";


export class Router {
    private static __instance: Router;

    private routes: Route[] = [];

    private history: History;

    private _currentRoute: Route | null;

    private _rootQuery: string;


    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    public use(pathname: string, block: BlockConstructor): this {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

    public start(): void {
        window.onpopstate = (event: PopStateEvent): void => {
            if (event.currentTarget) {
                console.log('[event]', event.currentTarget.location.pathname);
                this._onRoute(event.currentTarget.location.pathname); // location там точно есть
            }
        };

        this._onRoute(window.location.pathname);
    }

    public go(pathname: string): void {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    public back(): void {
        this.history.back();
    }

    public forward(): void {
        this.history.forward();
    }

    private getRoute(pathname: string): Route | undefined {
        return this.routes.find(route => route.match(pathname));
    }

    private _onRoute(pathname: string): void {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;

        console.log('this._currentRoute', this._currentRoute);

        route.render();
    }
}

import type {Block, BlockConstructor} from "./block.ts";
import {HelperService} from "./helper.ts";

export interface RouteProps {
    rootQuery: string;
}

export class Route {
    private _pathname: string;

    private _blockClass: BlockConstructor;

    private _props: RouteProps;

    private _block: Block | null;

    constructor(pathname: string, view: BlockConstructor, props: RouteProps) {
        this._pathname = pathname;
        this._blockClass = view;
        this._props = props;
        this._block = null;
    }

    /**
     * Метод для отображения вьюшки, если переданный URL совпадает с URL текущего Route;
     * @param pathname
     */
    public navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    /**
     *  Вызывает hide у элемента;
     */
    public leave(): void {
        if (this._block) {
            this._block.hide();
        }
    }

    /**
     * Создаёт блок, если тот ещё не был создан (нужно создавать блок только после первого перехода на страницу),
     * иначе вызывает у блока метод show.
     */
    public render(): void {
        if (!this._block) {
            this._block = new this._blockClass({});
            HelperService.render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
        HelperService.render(this._props.rootQuery, this._block);
    }

    public match(pathname: string): boolean {
        return HelperService.isEqual(pathname, this._pathname);
    }
}

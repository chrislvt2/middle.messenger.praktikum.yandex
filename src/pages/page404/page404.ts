import {Block} from "../../framework/block.ts";
import {ButtonComponent} from "../../components";
import {ErrorComponent} from "../../components";

export class Page404Component extends Block {
    constructor() {
        super({
            error: new ErrorComponent({
                code: '404',
                message: 'Не туда попали',
            }),
            returnToChatListButton: new ButtonComponent({
                id: "page400ReturnToChatListButton",
                label: "Назад к чатам",
            }),
        });
    }

    public override render() {
        return `
            <main id="app">
                <div class="error-page">
                    {{{ error }}}
                    {{{ returnToChatListButton }}}
                </div>
            </main>`;
    }
}

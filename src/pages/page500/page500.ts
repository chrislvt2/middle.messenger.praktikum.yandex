import {Block} from "../../framework/block.ts";
import {ButtonComponent} from "../../components/button/button.ts";
import {ErrorComponent} from "../../components/error/error.ts";

export class Page500Component extends Block {
    constructor() {
        super({
            error: new ErrorComponent({
                code: '500',
                message: 'Мы уже фиксим',
            }),
            returnToChatListButton: new ButtonComponent({
                id: "page500ReturnToChatListButton",
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

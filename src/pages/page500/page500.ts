import {Block} from "../../framework/block.ts";
import {ButtonComponent} from "../../components/button/button.ts";
import {ErrorComponent} from "../../components/error/error.ts";

export class Page500Component extends Block {
    constructor() {
        super({
            Error: new ErrorComponent({
                code: '500',
                message: 'Мы уже фиксим',
            }),
            ReturnToChatListButton: new ButtonComponent({
                id: "page500ReturnToChatListButton",
                label: "Назад к чатам",
            }),
        });
    }

    public override render() {
        return `
            <main class="app">
                <div class="error-page">
                    {{{ Error }}}
                    {{{ ReturnToChatListButton }}}
                </div>
            </main>`;
    }
}

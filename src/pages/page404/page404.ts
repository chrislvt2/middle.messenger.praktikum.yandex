import {Block} from "../../framework/block.ts";
import {ButtonComponent} from "../../components";
import {ErrorComponent} from "../../components";
import {ROUTES} from "../../models/router.model.ts";
import {Router} from "../../framework/router.ts";

export class Page404Component extends Block {
    constructor() {
        const router = new Router();

        super({
            error: new ErrorComponent({
                code: '404',
                message: 'Не туда попали',
            }),
            returnToChatListButton: new ButtonComponent({
                label: "Назад к чатам",
                onClick: (): void => {
                    router.go(ROUTES.CHAT_LIST);
                },
            }),
        });
    }

    public override render() {
        return `
                <div class="error-page">
                    {{{ error }}}
                    {{{ returnToChatListButton }}}
                </div>
           `;
    }
}

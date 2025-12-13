import {Block} from "../../framework/block.ts";
import {ButtonComponent} from "../../components/button/button.ts";
import {SearchFieldComponent} from "../../components/search-field/search-field.ts";
import {previewChats} from '../../mockData.ts';


export class ChatListPageComponent extends Block {
    constructor() {
        super({
            previewChats: previewChats,

            SearchField: new SearchFieldComponent({
                class: "chat-page__search-input",
            }),
            ProfileButton: new ButtonComponent({
                id: "openProfile",
                label: "Профиль",
            }),
        });
    }

    public override render() {
        return `
            <main class="app">
                <div class="chat-page">
                    <div class="chat-page__list">
                        <div class="chat-page__settings">
                            {{{ ProfileButton }}}
                            {{{ SearchField }}}
                        </div>
                        <div class="chat-page__chats">
                            <ul>

                            </ul>
                        </div>
                    </div>
                    <div class="chat-page__messages">Выберите чат, чтобы отправить сообщение</div>
                </div>
            </main>
        `;
    }
}

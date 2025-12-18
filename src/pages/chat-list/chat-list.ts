import {Block} from "../../framework/block.ts";
import {ButtonComponent} from "../../components";
import {SearchFieldComponent} from "../../components";
import {type PreviewChatModel, previewChats} from '../../mockData.ts';
import {FormComponent} from "../../components";
import {messageValidator} from "../../validation";
import {ChatPreviewComponent} from "../../components";


export class ChatListPageComponent extends Block {
    constructor() {
        const chatPreviewFields = previewChats.map((previewChat: PreviewChatModel) => {
            return new ChatPreviewComponent({
                data: previewChat,
                clickHandler: (selectedData: PreviewChatModel) => {
                    this.setProps({ selected: selectedData});
                },
            });
        })

        super({
            chatPreviewFields,
            messageForm: new FormComponent({
                formFields: [
                    {
                        id: "messageField",
                        type: "text",
                        label: "Введите собщение",
                        name: "message",
                        validator: messageValidator,
                    },
                ],
                submitButton: {
                    label: "Отправить сообщение",
                },
            }),
            searchField: new SearchFieldComponent({
                class: "chat-page__search-input",
            }),
            profileButton: new ButtonComponent({
                id: "openProfile",
                label: "Профиль",
            }),
        });
    }

    public override render() {
        return `
            <main id="app">
                <div class="chat-page">
                    <div class="chat-page__list">
                        <div class="chat-page__settings">
                            {{{ profileButton }}}
                            {{{ searchField }}}
                        </div>
                        <div class="chat-page__chats">
                            <ul>
                                {{{ chatPreviewFields }}}
                            </ul>
                        </div>
                    </div>
                    <div class="chat-page__main-content">
                        {{#if selected}}
                            <ul class="chat-page__messages">
                                <li>
                                    <div> {{selected.name}}</div>
                                    <div> {{selected.message}}</div>
                                </li>
                            </ul>
                            <div class="chat-page__message-form-wrapper">
                                {{{ messageForm }}}
                            </div>
                        {{else}}    
                            <div class="chat-page__messages">Выберите чат, чтобы отправить сообщение</div>
                        {{/if}}
                    </div>
                </div>
            </main>
        `;
    }
}

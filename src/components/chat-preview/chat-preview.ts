import {Block, type BlockProps} from "../../framework/block.ts";

export class ChatPreviewComponent extends Block {
    constructor(props: BlockProps) {
        super({
            ...props,
        });
    }

    override render() {
        return `
            <div class="chat-preview">
                <div class="chat-preview__header">
                    <div class="chat-preview__name">{{name}}</div>
                    <div class="chat-preview__time">{{time}}</div>
                </div>
                <div class="chat-preview__content">{{message}}</div>
            </div>
        `;
    }
}

import {Block, type BlockProps} from "../../framework/block.ts";
import type {PreviewChatModel} from "../../mockData.ts";

export interface CharPreviewProps extends BlockProps {
    data: PreviewChatModel;
    clickHandler: (selectedData: PreviewChatModel) => void;
}

export class ChatPreviewComponent extends Block {
    constructor(props: CharPreviewProps) {
        super({
            ...props,
            events: {
                click: () => {
                    this.props.clickHandler(this.props.data);
                },
            },
        });
    }

    override render() {
        return `
            <div class="chat-preview">
                <div class="chat-preview__header">
                    <div class="chat-preview__name">{{data.name}}</div>
                    <div class="chat-preview__time">{{data.time}}</div>
                </div>
                <div class="chat-preview__content">{{data.message}}</div>
            </div>
        `;
    }
}

import {Block, type BlockProps} from "../../framework/block.ts";

export class ButtonComponent extends Block {
    constructor(props: BlockProps) {
        super({
            ...props,
            events: {
                click: (e: Event) => {
                    props.onClick(e);
                },
            },
        });
    }

    override render() {
        return `
            <button class="{{class}} button" id="{{id}}" data-page="{{data-page}}">
                {{label}}
            </button>
        `;
    }
}

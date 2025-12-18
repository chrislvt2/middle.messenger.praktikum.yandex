import {Block, type BlockProps} from "../../framework/block.ts";

export interface ButtonProps extends BlockProps {
    label: string;
    type?: string;
}

export class ButtonComponent extends Block {
    constructor(props: ButtonProps) {
        super({
            ...props,
            events: {
                click: (e: Event) => {
                    if (props?.onClick) {
                        props.onClick(e);
                    }
                },
            },
        });
    }

    override render() {
        return `
            <button class="{{class}} button" type={{type}} data-page="{{data-page}}">
                {{label}}
            </button>
        `;
    }
}

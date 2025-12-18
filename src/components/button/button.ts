import {Block, type BlockProps} from "../../framework/block.ts";
import type {EventCallback} from "../../framework/event-bus.ts";

export interface ButtonProps extends BlockProps {
    label: string;
    type?: string;
    onClick?: EventCallback;
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

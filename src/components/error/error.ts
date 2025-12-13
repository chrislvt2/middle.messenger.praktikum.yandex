import {Block, type BlockProps} from "../../framework/block.ts";

export class ErrorComponent extends Block {
    constructor(props: BlockProps) {
        super({
            ...props,
        });
    }

    override render() {
        return `
            <div class="error">
                <div class="error__code">{{code}}</div>
                <div class="error__message">{{message}}</div>
            </div>
        `;
    }
}

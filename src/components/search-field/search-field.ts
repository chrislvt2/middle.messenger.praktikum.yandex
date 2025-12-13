import {Block, type BlockProps} from "../../framework/block.ts";

export class SearchFieldComponent extends Block {
    constructor(props: BlockProps) {
        super({
            ...props,
        });
    }

    override render() {
        return `
            <div class="search-field">
                <input class={{class}} type="text" placeholder="Поиск">
            </div>
        `;
    }
}

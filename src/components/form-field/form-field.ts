import {Block, type BlockProps} from "../../framework/block.ts";

export class FormFieldComponent extends Block {
    constructor(props: BlockProps) {
        super({
            ...props,
        });
    }

    override render() {
        return `
            <div class="form-field">
                <label for="{{id}}">{{label}}</label>
                <input id="{{id}}" type="{{type}}" name="{{name}}" value="{{value}}" required/>
            </div>
        `;
    }
}

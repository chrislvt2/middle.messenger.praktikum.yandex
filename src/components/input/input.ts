import {Block, type BlockProps} from "../../framework/block.ts";
import type {ValidationResult} from "../../validation/validation-result.model.ts";

export interface InputProps extends BlockProps {
    id: string;
    name: string;
    type: string;
    value?: unknown;
}

export class InputComponent extends Block {
    constructor(props: InputProps) {
        super({
            ...props,
            attr: {
                class: 'input'
            },
            events: {
                blur: () => {
                    this.validate();
                },
            },
        });
    }

    public validate(): boolean {
        if (!this.props.validator) {
            return true;
        }

        const result: ValidationResult = this.props.validator(this.value);
        this.setAttributes({
            class: result.isValid ? 'input' : 'input invalid',
        });
        this.props.validationHandler(result);

        return result.isValid;
    }

    private get value(): string {
        return (this.getContent() as HTMLInputElement).value;
    }

    override render() {
        return `
            <input
                class="{{class}}"
                id="{{id}}"
                type="{{type}}"
                name="{{name}}"
                value="{{value}}"
            />
        `;
    }
}

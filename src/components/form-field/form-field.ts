import {Block, type BlockProps} from "../../framework/block.ts";
import {InputComponent} from "../input/input.ts";
import type {ValidationResult} from "../../validation/validation-result.model.ts";

export interface FormFieldProps extends BlockProps {
    id: string;
    name: string;
    type: string;
    value?: any;
    validator?: any;
}

export class FormFieldComponent extends Block {
    constructor(props: FormFieldProps) {
        super({
            ...props,
            invalid: false,
            errorMessage: "",
            input: new InputComponent({
                ...props,
                validationHandler: (result: ValidationResult) => this.validationHandle(result),
            }),
        });
    }

    public validate(): boolean {
        return (this.children.input as InputComponent).validate();
    }

    public validationHandle(result: ValidationResult): void {
        this.props.invalid = !result.isValid;
        this.props.errorMessage = result.message;
    }

    override render() {
        return `
            <div class="form-field">
                <label for="{{id}}">{{label}}</label>
                {{{ input }}}
                {{#if invalid}}
                    <div>
                        {{errorMessage}}
                    </div>
                {{/if}}
            </div>
        `;
    }
}

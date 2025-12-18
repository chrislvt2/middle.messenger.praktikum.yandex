import {Block, type BlockProps} from "../../framework/block.ts";
import {FormFieldComponent, type FormFieldProps} from "../form-field";
import {ButtonComponent, type ButtonProps} from "../button";

export interface FormProps extends BlockProps {
    formFields: FormFieldProps[];
    submitButton: ButtonProps;
    submitVisible?: boolean;
    submitAction?: () => void;
    title?: string;
}

export class FormComponent extends Block {
    constructor(props: FormProps) {
        const fields: FormFieldComponent[] = props.formFields.map((field: FormFieldProps): FormFieldComponent => {
            return new FormFieldComponent(field);
        });

        const button: ButtonComponent = new ButtonComponent({
            ...props.submitButton,
            type: "submit",
        });

        super({
            title: props.title,
            fields,
            button,
            submitVisible: 'submitVisible' in props ? props.submitVisible : true,
            ...props,
            events: {
                submit: (e: Event) => {
                    e.preventDefault();

                    let valid = true;
                    this.lists.fields.forEach((field: FormFieldComponent): void => {
                        valid = field.validate() && valid;
                    });

                    const formData: FormData = new FormData(e.target as HTMLFormElement);
                    const data = Object.fromEntries(formData.entries());
                    console.log('---');
                    console.log('Форма со всеми заполненными полями', data);
                    console.log('---');

                    if (valid) {
                        this.props?.submitAction && this.props.submitAction();
                    }
                },
            },
        });
    }

    override render() {
        return `
            <form class="form {{class}}">
                {{#if title}}
                    <div class="form__title">{{title}}</div>
                {{/if}}
                <div class="form__inputs">
                    {{{ fields }}}
                </div>
                {{#if submitVisible}}
                    <div class="form__buttons">
                        {{{ button }}}
                    </div>
                {{/if}}
            </form>
        `;
    }
}

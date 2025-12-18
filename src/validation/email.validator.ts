import type {ValidationResult} from "./validation-result.model.ts";

export function emailValidator(email: string): ValidationResult {
    const trimmedEmail = email.trim();

    if (!email || trimmedEmail === '') {
        return {
            isValid: false,
            message: 'Email не может быть пустым'
        };
    }

    const strictPattern = /^(?=.{1,64}@)[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?@(?=[a-zA-Z0-9-]{1,255}\.)[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/;

    if (!strictPattern.test(trimmedEmail)) {
        return {
            isValid: false,
            message: 'Неверный формат email-адреса'
        };
    }

    return {
        isValid: true
    };
}

import type {ValidationResult} from "./validation-result.model.ts";

export function messageValidator(message: string): ValidationResult {
    if (!message || message.trim() === '') {
        return {isValid: false, message: 'Поле обязательно для заполнения'};
    }

    return {isValid: true};
}

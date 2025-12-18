import type {ValidationResult} from "./validation-result.model.ts";

export function phoneValidator(phone: string): ValidationResult {
    const trimmedPhone = phone.trim();

    if (!trimmedPhone || trimmedPhone === '') {
        return {
            isValid: false,
            message: 'Номер телефона не может быть пустым'
        };
    }

    // ^(\+)? - может начинаться с плюса (всего один плюс)
    // (?![+]) - гарантия, что после первого символа нет другого плюса
    // [0-9]{10,15}$ - от 10 до 15 цифр
    const strictPhonePattern = /^(\+)?(?![+])[0-9]{10,15}$/;

    if (!strictPhonePattern.test(trimmedPhone)) {
        return {
            isValid: false,
            message: 'Неверный формат. Пример: +79991234567 или 89991234567'
        };
    }

    return {
        isValid: true
    };
}

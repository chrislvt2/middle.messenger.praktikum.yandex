import type {ValidationResult} from "./validation-result.model.ts";

/**
 * Валидация поля логина с подробными сообщениями об ошибках
 * @param login - строка логина для проверки
 * @returns Объект с результатом валидации
 */
export function loginValidator(login: string): ValidationResult {
    if (!login || login.trim() === '') {
        return {isValid: false, message: 'Логин обязателен для заполнения'};
    }

    if (login.length < 3 || login.length > 20) {
        return {isValid: false, message: 'Логин должен содержать от 3 до 20 символов'};
    }

    if (/\s/.test(login)) {
        return {isValid: false, message: 'Логин не должен содержать пробелы'};
    }

    if (/^[0-9]+$/.test(login)) {
        return {isValid: false, message: 'Логин не должен состоять только из цифр'};
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(login)) {
        return {
            isValid: false,
            message: 'Логин должен содержать только латинские буквы, цифры, дефис или нижнее подчёркивание'
        };
    }

    if (!/[a-zA-Z]/.test(login)) {
        return {
            isValid: false,
            message: 'Логин должен содержать хотя бы одну латинскую букву'
        };
    }

    return {isValid: true};
}

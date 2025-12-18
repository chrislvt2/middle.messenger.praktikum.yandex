import type {ValidationResult} from "./validation-result.model.ts";

/**
 * Валидация пароля с подробными сообщениями об ошибках
 * @param password - пароль для проверки
 * @returns Объект с результатом валидации
 */
export function passwordValidator(password: string): ValidationResult {
    if (!password || password.trim() === '') {
        return { isValid: false, message: 'Пароль обязателен для заполнения' };
    }

    // Проверка длины
    if (password.length < 8) {
        return { isValid: false, message: 'Пароль должен содержать минимум 8 символов' };
    }

    if (password.length > 40) {
        return { isValid: false, message: 'Пароль должен содержать не более 40 символов' };
    }

    // Проверка наличия заглавной буквы
    if (!/[A-Z]/.test(password)) {
        return { isValid: false, message: 'Пароль должен содержать хотя бы одну заглавную букву' };
    }

    // Проверка наличия цифры
    if (!/\d/.test(password)) {
        return { isValid: false, message: 'Пароль должен содержать хотя бы одну цифру' };
    }

    // Дополнительная проверка на пробелы (опционально)
    if (/\s/.test(password)) {
        return { isValid: false, message: 'Пароль не должен содержать пробелы' };
    }

    return { isValid: true };
}

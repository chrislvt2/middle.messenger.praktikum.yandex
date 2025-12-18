/**
 * Валидация имени с подробными сообщениями об ошибках
 * @param name - имя для проверки
 * @returns Объект с результатом валидации
 */
export function nameValidator(name: string): { isValid: boolean; message?: string } {
    if (!name || name.trim() === '') {
        return {isValid: false, message: 'Имя обязательно для заполнения'};
    }

    // Проверка на наличие значения
    if (name.length === 0) {
        return {isValid: false, message: 'Имя не может быть пустым'};
    }

    // Проверка на пробелы
    if (/\s/.test(name)) {
        return {isValid: false, message: 'Имя не должно содержать пробелы'};
    }

    // Проверка на цифры
    if (/\d/.test(name)) {
        return {isValid: false, message: 'Имя не должно содержать цифры'};
    }

    // Проверка на специальные символы (кроме дефиса)
    if (/[^a-zA-Zа-яА-ЯёЁ-]/.test(name)) {
        return {isValid: false, message: 'Имя содержит недопустимые символы. Разрешены только буквы и дефис'};
    }

    // Проверка первой буквы (должна быть заглавной)
    const firstChar = name.charAt(0);
    if (!/[A-ZА-ЯЁ]/.test(firstChar)) {
        return {isValid: false, message: 'Первая буква имени должна быть заглавной'};
    }

    // Проверка последней буквы (не может быть дефисом)
    const lastChar = name.charAt(name.length - 1);
    if (lastChar === '-') {
        return {isValid: false, message: 'Имя не может заканчиваться дефисом'};
    }

    // Проверка на двойной дефис
    if (name.includes('--')) {
        return {isValid: false, message: 'Имя не должно содержать два дефиса подряд'};
    }

    // Проверка на смешение алфавитов
    const hasLatin = /[a-zA-Z]/.test(name);
    const hasCyrillic = /[а-яА-ЯёЁ]/.test(name);

    if (hasLatin && hasCyrillic) {
        return {isValid: false, message: 'Имя не должно содержать буквы из разных алфавитов одновременно'};
    }

    // Проверка минимальной длины (минимум 2 символа для имени типа "Ан" или "Jo")
    if (name.replace(/-/g, '').length < 2) {
        return {isValid: false, message: 'Имя слишком короткое'};
    }

    // Проверка максимальной длины (опционально)
    if (name.length > 50) {
        return {isValid: false, message: 'Имя слишком длинное'};
    }

    return {isValid: true};
}

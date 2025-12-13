export type EventCallback = (...args: unknown[]) => void;

export class EventBus {
    private listeners: Record<string, EventCallback[]>;

    constructor() {
        this.listeners = {};
    }

    /**
     * Регистрация новой функции-обработчика события
     * @param event - название события
     * @param callback - ссылка на функцию-обработчик, которая будет вызвана, когда придет оповещение о событии
     */
    public on(event: string, callback: EventCallback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    /**
     * Удаление функции-обработчика события
     * @param event - название события,
     * @param callback - ссылка на функцию-обработчик
     */
    public off(event: string, callback: EventCallback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    /**
     * Вызов функций-обработчиков события
     * @param event - название события
     * @param args - дополнительные данные для функций-обработчиков
     */
    public emit(event: string, ...args: unknown[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener) {
            listener(...args);
        });
    }
}

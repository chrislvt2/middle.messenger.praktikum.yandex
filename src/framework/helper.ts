import type {Block} from "./block.ts";

export class HelperService {
    /**
     * Сравнивает две строки на равенство
     */
    public static isEqual(lhs: string, rhs: string): boolean {
        return lhs === rhs;
    }

    /**
     * Отображение page
     * @param query
     * @param page
     */
    public static render(query: string, page: Block): void {
        const app: HTMLElement | null = document.querySelector(query);
        if (app) {
            app.replaceChildren(page.getContent());
        }
    }
}

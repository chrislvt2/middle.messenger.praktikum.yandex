export interface PreviewChatModel {
    name: string;
    message: string;
    time: string;
}

export const previewChats: PreviewChatModel[] = [
    {
        name: "Андрей",
        message: "Я вчера был в кино",
        time: "10:49"
    },
    {
        name: "Владимир",
        message: "Я вчера был в музее",
        time: "10:48"
    },
    {
        name: "Анастасия",
        message: "Я вчера была в университете",
        time: "10:47"
    },
];

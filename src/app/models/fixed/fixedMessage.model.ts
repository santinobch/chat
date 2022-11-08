export interface FixedMessageModel {
    sender: {
        main: boolean;
        name: string;
        id: number;
    }
    time: string;
    text: string;
}
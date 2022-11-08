import { MessageModel } from "./message.model";

export interface ConversationModel {
    id: number;
    users: number[];
    lastMessageTime: string;
    messages: MessageModel[];
}
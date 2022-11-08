import { MessageModel } from "./message.model";

export interface ConversationImprovedModel {
    id: number;
    sender: string;
    receiver: string;
    lastMessageTime: string;
    messages: MessageModel[];
}
import { FixedMessageModel } from "./fixedMessage.model";

export interface FixedConversationModel {
    id: number;
    main: {
        name: string;
        id: number;
    }
    secondary: {
        name: string;
        id: number;
    }
    lastMessageTime: string;
    messages: FixedMessageModel[];
}
import { ConversationModel } from "./conversation.model";

export interface ConversationsModel {
    status: boolean;
    data: ConversationModel[]
}
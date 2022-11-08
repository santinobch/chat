import { ContactModel } from "../contact.model";
import { FixedConversationModel } from "./fixedConversation.model";

export interface FixedDataModel {
    activeConversation: number;
    contacts: ContactModel[];
    conversations: FixedConversationModel[]
}
import { ContactModel } from "./contact.model";

export interface ContactsModel {
    status: boolean;
    data: ContactModel[];
}
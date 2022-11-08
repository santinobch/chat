import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { ContactsService } from '../contacts/contacts.service';
import { ConversationsService } from '../conversations/conversations.service';

import { ContactModel } from 'src/app/models/contact.model';
import { ConversationModel } from 'src/app/models/conversation.model';
import { FixedDataModel } from 'src/app/models/fixed/fixedData.model';
import { FixedConversationModel } from 'src/app/models/fixed/fixedConversation.model';
import { FixedMessageModel } from 'src/app/models/fixed/fixedMessage.model';

@Injectable({
    providedIn: 'root'
})
export class FixedDataService {

    constructor(
        public contactsService: ContactsService,
        public conversationsService: ConversationsService
    ){}

    /**
     * La informacion fue presentada de una manera tan asquerosa que la tuve que reestructurar. 
     * Esto no se hace, esto se hace desde base de datos o backend.
     * Hacer esto empeora la experiencia del usuario copn tiempos de carga mas lentos.
     */

    public conversations!: ConversationModel[];
    public fixedData: FixedDataModel = {
        activeConversation: 0,
        contacts: [],
        conversations: []
    };

    requestData(): void {
        lastValueFrom(this.contactsService.get()).then(r => {
            this.fixedData.contacts = r.data;
      
            lastValueFrom(this.conversationsService.get()).then(rr => {
                this.conversations = rr.data;
        
                this.fixedData.contacts.forEach( ct => {
                    this.conversations.forEach( cv => {
                        if (ct.id == cv.users[1]) {
            
                            //Reorganizing information
                            let fixedConvesation: FixedConversationModel = {
                                id: (cv.id - 1),
                                main: {
                                    name: "My name",
                                    id: 1
                                },
                                secondary: {
                                    name: ct.title,
                                    id: ct.id
                                },
                                lastMessageTime: cv.lastMessageTime,
                                messages: []
                            }

                            cv.messages.forEach( m => {
                                let fixedMessage: FixedMessageModel = {
                                    sender: {
                                        main: (m.sender == 1),
                                        name: (m.sender == 1) ? fixedConvesation.main.name : fixedConvesation.secondary.name,
                                        id: m.sender
                                    },
                                    time: m.time,
                                    text: m.text
                                }
                                
                                fixedConvesation.messages.push(fixedMessage)
                            })

                            this.fixedData.conversations.push(fixedConvesation)
                        }
                    })
                })
            })
        })
    }

    newConversation(secondaryId: number, secondaryName: string): void {

        let repeated: boolean = false;
        let conversationId: number = 0;

        this.fixedData.conversations.forEach(x => {
            if (x.secondary.id == secondaryId) {
                repeated = true;
                conversationId = x.id;
            }
        })

        if (!repeated) {
            let conversation: FixedConversationModel = {
                id: this.fixedData.conversations.length,
                main: {
                    name: "My name",
                    id: 1
                }, 
                secondary: {
                    name: secondaryName,
                    id: secondaryId
                },
                lastMessageTime: "No messages",
                messages: []
            }
    
            this.fixedData.conversations.push(conversation);
            this.fixedData.activeConversation = conversation.id;
        } else {
            this.fixedData.activeConversation = conversationId;
        }
    }
}

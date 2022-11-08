import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ContactsModel } from 'src/app/models/contacts.model';

@Injectable({
    providedIn: 'root'
})
export class ContactsService{

    constructor(private http: HttpClient){
    }

    get(): Observable<ContactsModel> {

        return this.http.get<ContactsModel>("https://api.coloredstrategies.com/contacts");

    }
}

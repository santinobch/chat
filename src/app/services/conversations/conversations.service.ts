import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ConversationsModel } from 'src/app/models/conversations.model';

@Injectable({
    providedIn: 'root'
})
export class ConversationsService{

    constructor(private http: HttpClient){
    }

    get(): Observable<ConversationsModel> {

        return this.http.get<ConversationsModel>("https://api.coloredstrategies.com/conversations");

    }
}

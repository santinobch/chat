import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FixedDataService } from './services/fixedData/fixedData.service';

import { faPaperclip, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FixedMessageModel } from './models/fixed/fixedMessage.model';
import { firstValueFrom, lastValueFrom, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    public dataService: FixedDataService
  ) {}

  faPaperclip = faPaperclip;
  faChevronRight = faChevronRight;

  inputObservable!: Observable<ElementRef>;
  inputSub!: Subscription;
  inputElement!: ElementRef;

  ngOnInit(): void {
    this.dataService.requestData();
    
    console.log("Initial data:");
    console.log(this.dataService.fixedData)
  }

  ngAfterViewInit() {
  }

  sendMessage() {

    if (this.inputElement.nativeElement.value != "") {
      let date: Date = new Date();

      let message: FixedMessageModel = {
        sender: {
          main: true,
          name: "My name",
          id: 1
        },
        time: date.getHours().toString() + ":" + date.getMinutes().toString(),
        text: this.inputElement.nativeElement.value
      }

      this.inputElement.nativeElement.value = "";
    
      this.dataService.fixedData.conversations[this.dataService.fixedData.activeConversation].messages.push(message)
    }
  }

  storeObservable(ob: Observable<ElementRef>) {
    this.inputObservable = ob;

    this.inputSub = this.inputObservable.subscribe(el => {
      this.inputElement = el
    })
  }

  ngOnDestroy() {
    this.inputSub.unsubscribe();
  }
}

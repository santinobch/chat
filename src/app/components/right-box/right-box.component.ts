import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { slideInLeftAnimation } from 'src/app/animations/slideInRight.animation';
import { ContactModel } from 'src/app/models/contact.model';

import { FixedDataService } from 'src/app/services/fixedData/fixedData.service';

@Component({
  selector: 'right-box',
  templateUrl: './right-box.component.html',
  styleUrls: ['./right-box.component.scss'],
  animations: [slideInLeftAnimation]
})
export class RightBoxComponent implements OnInit {

  constructor(
    public dataService: FixedDataService
  ) { }

  toggled: boolean = true;
  contacts!: ContactModel[];

  inputObservable!: Observable<ElementRef>;
  inputSub!: Subscription;
  inputElement!: ElementRef;

  ngOnInit(): void {
    this.contacts = this.dataService.fixedData.contacts
  }

  storeObservable(ob: Observable<ElementRef>) {
    this.inputObservable = ob;

    this.inputObservable.subscribe(el => {

      console.log("active");
      this.contacts = [];

      this.dataService.fixedData.contacts.forEach(c => {
        if (c.title.toLowerCase().includes(el.nativeElement.value.toLowerCase()) || el.nativeElement.value == "")  {
          
          this.contacts.push(c);
        }
      })
    })
  }

  ngOnDestroy() {
    this.inputSub.unsubscribe();
  }
}

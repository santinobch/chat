import { Component, OnInit, ElementRef } from '@angular/core';

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

  ngOnInit(): void {
    setTimeout(() => {
      this.contacts = this.dataService.fixedData.contacts
    }, 1000);
  }

  storeObservable(el: ElementRef) {
    if (el != undefined) {

      this.contacts = [];

      this.dataService.fixedData.contacts.forEach(c => {
        if (c.title.toLowerCase().includes(el.nativeElement.value.toLowerCase()) || el.nativeElement.value == "")  {
          
          this.contacts.push(c);
        }
      })

    }
  }
}

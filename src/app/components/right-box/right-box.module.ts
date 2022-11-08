import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgScrollbarModule } from 'ngx-scrollbar';

import { RightBoxComponent } from './right-box.component';
import { InputModule } from '../input/input.module';

@NgModule({
  declarations: [RightBoxComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    NgScrollbarModule,

    InputModule
  ],
  exports: [
    RightBoxComponent
  ]
})
export class RightBoxModule { }

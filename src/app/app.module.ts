import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RightBoxModule } from './components/right-box/right-box.module';
import { MessageModule } from './components/message/message.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { InputModule } from './components/input/input.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    NgScrollbarModule,
    
    BrowserModule,
    AppRoutingModule,
    RightBoxModule,
    MessageModule,
    InputModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

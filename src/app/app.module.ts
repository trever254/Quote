import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { QuoteComponent } from './quote/quote.component';
import { HighlightDirective } from './highlight.directive';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDirective } from './quotes.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailsComponent,
    QuoteComponent,
    HighlightDirective,
    QuotesComponent,
    QuotesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuoteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
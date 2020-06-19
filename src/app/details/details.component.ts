import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote"
import { QuotesComponent } from '../quotes/quotes.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote:Quote
  constructor() { }

  ngOnInit(): void {
  }

}

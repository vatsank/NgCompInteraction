import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() selectedHotel: string;
  @Input() fromParent: string;
  @Input() hotelName: string;
  @Output() result: EventEmitter<string> = new EventEmitter<string>();
  rating: string;
  reviews: Map<string , string> ;
  constructor() {
    console.log('child initalized');
    this.reviews = new Map<string, string>();

    this.reviews.set('Ratna Cafe', '4.5');
    this.reviews.set('Thalapakatti', '4.2');
    this.reviews.set('Udupi', '4.4');

   }

  ngOnInit() {
   
   this.rating = this.reviews.get(this.hotelName);
    console.log('child ng init called');
   
  }

   sendReview() {
     const foundRating = this.reviews.get(this.selectedHotel);
     if (foundRating === undefined) {
      this.result.emit('I dont know about this hotel');

     } else  {
     this.result.emit(foundRating);
    }
   }
}

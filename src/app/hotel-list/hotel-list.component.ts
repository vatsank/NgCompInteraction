import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit, ViewContainerRef } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CompadderService } from '../compadder.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit , AfterContentInit {
  align = 'left';
  menuItems: string[];
  // Injecting the child component into parent
  @ViewChild(MenuComponent) menu: MenuComponent;

  @ViewChild('dynamic', {read: ViewContainerRef}) containerRef: ViewContainerRef;

  rating: string;
  hotelToReview: string;
  toChild = 'Hello From Parent';
  hotelList = ['Ratna Cafe', 'Thalapakatti', 'Udupi'];

  constructor(private adderService: CompadderService, private viewRef: ViewContainerRef) {
    console.log('parent  constructor called');
   }

  ngOnInit() {

    console.log('parent on init called');
  }
  onchange(val) {
    this.rating = val;
  }

  ngAfterContentInit(): void {
    this.menuItems = this.menu.getMenu();

  }

   dynamicAdder(type) {
     // Add as  child
    // this.adderService.setViewContainerRef(this.viewRef);

    // Add as a sibling 
    this.adderService.setViewContainerRef(this.containerRef);

    this.adderService.addComponent(type);
   }
 
}

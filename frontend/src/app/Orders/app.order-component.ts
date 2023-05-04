import { Component, OnDestroy, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { map } from "rxjs";

@Component({
  selector:'app-order',
  templateUrl: './app.order-component.html'
})

export class OrderComponent implements OnInit {
  
  message: string;

  /*menuItems will contain:

    menuItem._id
    menuItem.name
    menuItem.price
    menuItem.description
    menuItem.options: 
    [{
			style: { type: String },
			price: { type: String },
		}],
    menuItem.type
    menuItem.category

  */
  menuItems: any[];

  constructor(public appService: AppService) {
    this.message = "";
    this.menuItems = [];
  }

  ngOnInit(){
    this.appService.fetchMenu().pipe(map(data => { this.menuItems = data.data })).subscribe(); 
  }

}

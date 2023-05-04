import { Component } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { async } from "@angular/core/testing";
import axios from "axios";

@Component({
  selector:'app-order',
  templateUrl: './app.order-component.html'
})

export class OrderComponent {
  
  httpClient: HttpClient;
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

  constructor(public http: HttpClient) {
    this.httpClient = http;
    this.message = "";
    this.menuItems = [];
  }

  ngOnInit(){
    this.fetchMenu();
  }

  fetchMenu()
  {
      this.httpClient.get<{message: string, data: any}>('http://localhost:5001/api/menu/get-menu')
      .subscribe(data => {
        this.message = data.message;
        this.menuItems = data.data;
      })   
      return;
  }

}

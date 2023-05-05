import { Component, OnDestroy, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { map } from "rxjs";
import { Order } from "./order";

@Component({
  selector:'app-order',
  templateUrl: './app.order-component.html'
})

export class OrderComponent implements OnInit {
  
  message: string;
  
  menuItems: any[];

  cartItems: any[];

  constructor(public appService: AppService) {
    this.message = "";
    this.menuItems = [];
    this.cartItems = [];
  }

  ngOnInit(){
    this.appService.fetchMenu().pipe(map(data => { this.menuItems = data.data })).subscribe(); 
  }

  addToCart(menuItem: any)
  {
    this.cartItems.push(menuItem);
  }

  newOrder()
  {
    let items = "";
    let price: number = 0;
    this.cartItems.forEach(item => {
      items += (item.name + " ")
      price += parseFloat(item.price)
    })
    const order: Order = {items: items, totalPrice: price.toString()};
    this.appService.postOrder(order).subscribe(response => { console.log(response); });

    this.cartItems = [];
  }

}

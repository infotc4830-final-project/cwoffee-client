import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { map } from "rxjs/operators";
import { AppService } from "../app.service";
import { FormsModule } from "@angular/forms";
import { Review } from "./review";

@Component({
  selector:'app-review',
  templateUrl: './app.review-component.html'
})

export class ReviewComponent {
  message: string;
  reviews: any[];

  constructor(public appService: AppService) {
    this.message = "";
    this.reviews = [];
  }

  ngOnInit(){
      this.appService.fetchReviews().pipe(map(data => { this.reviews = data.data })).subscribe(); 
  }  

  postReview()
  {
    const review: Review = {username: "Tesat", title: "Testm", content: "Testaa"};
    this.appService.postReview(review).subscribe(response => { console.log(response); });
  }

  

}

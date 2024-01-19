import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent {

  bookId!:any;
  reviewDescription!:string;

  isLoading : boolean = false;

  // active route
  constructor(private route: ActivatedRoute, private reviewService:ReviewService){

  }

  ngOnInit(){
    this.bookId = this.route.snapshot.paramMap.get('id');
  }

  AddReview(){

    var inputData = {
      reviewDescription : this.reviewDescription
    }

    this.reviewService.saveReview(inputData, this.bookId).subscribe({
      next: (res:any) => {
        alert(res.message);
      },
      error: (err: any)=> {
        console.log(err, 'error');
      }
    })
  }

}

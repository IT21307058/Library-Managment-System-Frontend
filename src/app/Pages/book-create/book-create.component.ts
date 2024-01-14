import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {

  authorId!:any;
  title!: string;
  description!: string;

  isLoading : boolean = false;
  loadingTitle: string = 'Loading';

  //active route
  constructor(private route: ActivatedRoute, private bookService: BookService){

  }

  ngOnInit(){
    this.authorId = this.route.snapshot.paramMap.get('id');

    // alert(this.authorId);
  }

  updateStudent(){

    var inputData = {
      title: this.title,
      description: this.description
    }

    this.bookService.saveBook(inputData, this.authorId).subscribe({
      next: (res:any) => {
        console.log(res);
        alert(res.message);
      },
      error: (err: any) => {
        console.log(err, 'error');
      }
    });
  }

}

import { Component } from '@angular/core';
import { BookResponse, BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {

  constructor(private bookService: BookService){}

  // array of book
  books!: BookResponse[];
  isLoading: boolean= false;

  // in firstly load onOnInit function then call getStudentLists()
  ngOnInit(){
    this.getBookLists();
  }

  getBookLists(){

    // loading true
    this.isLoading = true;

    //calling book service http api
    this.bookService.getBooks().subscribe((res:any) => {
      console.log(res);

      this.books = res;
      this.isLoading = false;
    });

    // calling book dlete http api
  }

  deleteBook(event:any, bookid:Number){
    if(confirm("Are you sure delete this book item ? ")){
      event.target.innerText = "Deleting....";

      this.bookService.deleteBooks(bookid).subscribe((res: any) => {

        // refresh book data in table 
        this.getBookLists();
        alert(res.message)
      })
    }
  }

}

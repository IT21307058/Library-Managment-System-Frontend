import { Component } from '@angular/core';
import { BookResponse, BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {

  constructor(private bookService: BookService) { }

  // array of book
  books: any[] = [];
  isLoading: boolean = false;
  totalElements: number = 0;
  totalPages: number = 0;
  lastPage: boolean = false;

  pageSize: number = 5;
  pageNumber: number = 0;
  sortBy: string = "bookid";
  sortDir: string = "desc"

  // in firstly load onOnInit function then call getStudentLists()
  ngOnInit() {
    this.getBookLists();
  }

  getBookLists() {

    // loading true
    this.isLoading = true;

    //calling book service http api
    this.bookService.getBooks(this.pageNumber, this.pageSize, this.sortBy, this.sortDir).subscribe((res: any) => {
      console.log(res);

      this.books = res.content;
      this.pageNumber = res.pageNumber;
      this.pageSize = res.pageSize;
      this.totalElements = res.totalElements;
      this.totalPages = res.totalPages;
      this.lastPage = res.lastPage;
      this.isLoading = false;
    });

    // calling book dlete http api
  }

  deleteBook(event: any, bookid: Number) {
    if (confirm("Are you sure delete this book item ? ")) {
      event.target.innerText = "Deleting....";

      this.bookService.deleteBooks(bookid).subscribe((res: any) => {

        // refresh book data in table 
        this.getBookLists();
        alert(res.message)
      })
    }
  }

  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber - 1; // Adjusting to 0-based index
    this.getBookLists();
  }

  getPages(): number[] {
    const pageCount = Math.ceil(this.totalElements / this.pageSize);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  // getImageUrl(imageName:string):void{
  //   this.bookService.getImage(imageName).subscribe(imageUrl => {
  //     console.log('Complete Image URL: ', imageUrl);
  //   });
  // }

}

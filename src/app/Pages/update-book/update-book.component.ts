import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookResponse, BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  bookId!: any
  title!: string
  description!: string
  // imageName!: string
  book!: any
  // imageUrl: string = "";

  isLoading: boolean = false;

  // active route
  constructor(private route: ActivatedRoute, private bookService: BookService) {

  }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.getBookDetails(this.bookId);
    // this.getImageUrl(this.imageName);
  }

  getBookDetails(bookId: number) {
    this.bookService.getOneBook(bookId).subscribe((res: any) => {
      this.book = res;
      this.title = this.book.title;
      this.description = this.book.description;
      // this.imageName = this.book.imageName;
      // this.getImageUrl(this.imageName);
    })
  }

  // getImageUrl(imageName: string) {
  //   this.bookService.getImage(imageName).subscribe((response: any) => {
  //       if (typeof response === 'string') {
  //         this.imageUrl = response;
  //       } else if (typeof response === 'object' && response.imageUrl) {
  //         this.imageUrl = response.imageUrl;
  //       } else {
  //         console.error('Invalid response format for image:', response);
  //       }
  //       this.isLoading = false;
  //     },
  //     error => {
  //       console.error('Error fetching image:', error);
  //       this.isLoading = false;
  //     }
  //   );
  // }

  updateBook(){
    var inputData = {
      title: this.title,
      description: this.description
    }

    this.bookService.updateBook(inputData, this.bookId).subscribe({
      next:(res:any)=>{
        alert(res.message);
      },
      error:(err:any)=>{
        console.log(err, 'error');
      }
    })
  }


}

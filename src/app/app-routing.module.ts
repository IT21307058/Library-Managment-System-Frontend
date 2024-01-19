import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentPageComponent } from './Pages/student-page/student-page.component';
import { BookCreateComponent } from './Pages/book-create/book-create.component';
import { BookPageComponent } from './Pages/book-page/book-page.component';
import { ReviewCreateComponent } from './Pages/review-create/review-create.component';
import { UpdateBookComponent } from './Pages/update-book/update-book.component';

const routes: Routes = [
  { path : '', component: HomePageComponent, title: 'Home page' },
  { path : 'about-us', component: AboutPageComponent, title: 'About us' },
  { path : 'contact-us', component: ContactPageComponent, title: 'Contact page' },
  { path : 'students', component: StudentPageComponent, title: 'Student Lists' },
  { path : 'students/create', component: StudentCreateComponent, title: 'Student Create' },
  { path : 'books', component: BookPageComponent, title: 'Book Page' },
  { path : 'students/:id/addBook', component: BookCreateComponent, title: 'Create Book' },
  { path : 'books/:id/addReview', component: ReviewCreateComponent, title: 'Add Review' },
  { path : 'books/:id/updateBook', component: UpdateBookComponent, title: 'Update Book' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

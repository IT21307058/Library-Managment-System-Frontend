import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  //call the student service line 11
  constructor(private studentService : StudentService){}
  // not able to get any data using !
  name!: string

  // errors: any = [];

  isLoading : boolean = false;
  loadingTitle: string = 'Loading';
  

  saveStudent(){
    this.isLoading = true;
    this.loadingTitle = 'Saving'
    var inputData = {
      name : this.name
    }

    this.studentService.saveStudent(inputData).subscribe({
      // I don't know what kind of response
      next: (res : any) => {
        // console.log(res, 'response');

        this.isLoading = false;
        this.loadingTitle = 'Saving'
        
        alert(res.message);
        this.name = '';
      },
      error:(err : any) => {
        // error list
        // this.errors = err.error.errors;
        console.log(err, 'error')
        this.isLoading = false;
      }
    });

  }

}

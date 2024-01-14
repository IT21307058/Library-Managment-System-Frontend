import { Component } from '@angular/core';
import { StudentService, StudentResponse } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {

  constructor(private studentService:StudentService){}

  // array of data
  students!: StudentResponse[];
  isLoading:boolean = false;

  // in firstly load onOnInit function then call getStudentLists()
  ngOnInit(){
    this.getStudentLists();
  }

  getStudentLists(){
    // loading true
    this.isLoading = true;
    // calling student service http api
    this.studentService.getStudents().subscribe((res:any) => {
      console.log(res);
      this.students = res;
      this.isLoading = false;
    });
  }

  deleteStudent(event:any, authorId:Number){
    if(confirm("Are you sure delete this data ? ")){
      event.target.innerText = "Deleting...";

      this.studentService.destryStudent(authorId).subscribe((res:any) => {

        //refresh data in table
        this.getStudentLists();
        alert(res.message)
      })
    }
  }

}

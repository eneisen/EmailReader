import { Component, OnInit } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css']
})
export class EmailReaderBasicComponent implements OnInit {

  email: Email;

  constructor() {
    this.email = {from: "Enrico", to:"John", subject: "Course: Programming of UX", body: "Hello, when does the class start? Greetings Enrico"}; 
   }

  ngOnInit(): void {
  }

  send (): void {
    window.alert('E-Mail information:' + '\nFrom: ' + this.email.from  +
        '\nTo: ' + this.email.to + '\nSubject: ' + this.email.subject + 
        '\nBody: ' + this.email.body);
    this.clean();

  }

  clean (): void {
    this.email.from = "";
    this.email.to = "";
    this.email.subject = ""; 
    this.email.body = "";
  }
   
  


}



// @Component({
//   selector: 'app-two-way-binding',
//   templateUrl: './two-way-binding.component.html',
//   styleUrls: ['./two-way-binding.component.css']
// })
// export class TwoWayBindingComponent implements OnInit {


//   student: Student;

//   constructor() {
//     this.student = {id: 12223, name:"John", email: "Snow"}; // Address is not defined
//   }

//   ngOnInit(): void {
//   }

//   print (): void {
//     window.alert('The student is ' + this.student.id  + " " + 
//         this.student.name + " " + this.student.email);
//   }

//   update (): void {
//     console.log("Updating"); 
//     this.student.id = 524;
//     this.student.name = "George"; 
//     this.student.email = "Test";
//   }

//   onBlurEvent(): void {
//     console.log("Focus in the email is lost");
//     window.alert('Focus on the email is lost');
//  }

// }


import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {

  email: Email;
  emailList: Email[];

  @ViewChild('emailForm') emailForm: any;

  constructor() {
    this.email = {from: "", to:"", subject: "", body: ""}; 
    this.emailList = [];
   }

  ngOnInit(): void {
  }

  sendForm (): void {
    window.alert('E-Mail information:' + '\nFrom: ' + this.email.from  +
        '\nTo: ' + this.email.to + '\nSubject: ' + this.email.subject + 
        '\nBody: ' + this.email.body);
    // this.clean();
    this.emailList.push(this.email);
    this.email = { from: '', to: '', subject: '', body: ''};
    this.cleanForm();

  }

  cleanForm(): void {
    this.emailForm.reset();
  }

  clear (): void {
    this.email.from = "";
    this.email.to = "";
    this.email.subject = ""; 
    this.email.body = "";
    this.emailForm.reset();
  }

  // addEmail(): void {
  //   this.emailList = {from: this.email.from, to: this.email.to, subject:this.email.subject}
  // }
}

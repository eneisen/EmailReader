import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email_id';
import { EmailsService } from '../services/emails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  email: Email;
  emailsList: Email[];

  @ViewChild('emailForm') emailForm: any;


  constructor(private emService: EmailsService, private router: Router) {
    this.email = {id: 0, from: "", to:"", subject: "", body: ""}; 
    this.emailsList = this.emService.getEmails();
   }

  ngOnInit(): void {
  }

  sendForm(): void {
    this.emService.addEmail({
      id: this.emService.generateId(), from: this.email.from, to: this.email.to, subject: this.email.subject, body: this.email.body
    })
    window.alert(`The email "${this.email.subject}" has been sent to ${this.email.to}`)
    this.emailForm.reset()
    this.router.navigate(['/emailslist'])
  }

  cleanForm(): void {
    this.emailForm.reset()
  }

}

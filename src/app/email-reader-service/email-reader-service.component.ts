import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email_id';
import { EmailsService } from '../services/emails.service';

@Component({
  selector: 'app-email-reader-service',
  templateUrl: './email-reader-service.component.html',
  styleUrls: ['./email-reader-service.component.css']
})
export class EmailReaderServiceComponent implements OnInit {

  email: Email;
  emailsList: Email[];
  term: string;
  withBody: boolean;

  @ViewChild('emailForm') emailForm: any;

  constructor(private emService: EmailsService) {
    this.email = {id: 0, from: "", to:"", subject: "", body: ""}; 
    this.emailsList = this.emService.getEmails();
    this.term = "";
    this.withBody = false; 
   }

  ngOnInit(): void {
  }

  sendForm(): void {
    this.emService.addEmail({
      id: this.emService.generateId(), from: this.email.from, to: this.email.to, subject: this.email.subject, body: this.email.body
    })
    window.alert(`The email "${this.email.subject}" has been sent to ${this.email.to}`)
    this.emailForm.reset()
  }

  cleanForm(): void {
    this.emailForm.reset()
  }

  remove(id: number): void {
    this.emService.deleteEmail(id)
  }
}

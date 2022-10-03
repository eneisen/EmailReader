import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email_id';
import { EmailsService } from '../services/emails.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {

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

  remove(id: number): void {
    this.emService.deleteEmail(id)
  }
 
}
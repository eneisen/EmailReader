import { Component, OnInit } from '@angular/core';
import { Email } from '../interfaces/email_id';
import { EmailsService } from '../services/emails.service';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})
export class EmailViewerComponent implements OnInit {

  email: Email;

  ngOnInit(): void {
  }

  constructor(private emService: EmailsService, @Inject(ActivatedRoute) private route : ActivatedRoute) {
    this.email = emService.getEmail(Number(this.route.snapshot.paramMap.get('id')))
  }
  
}

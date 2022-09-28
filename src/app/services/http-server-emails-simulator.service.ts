import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Email } from '../interfaces/email_id';


@Injectable({
  providedIn: 'root',
})
export class HttpServerEmailsSimulatorService implements InMemoryDbService {
  createDb() {
    const emails: Email[] = [
      { id: 1, from: "student1@upm.es", to: "profesor1@upm.es", subject: "The subject of email 1", body:"The message of email 1" },
      { id: 2, from: "student2@upm.es", to: "profesor2@upm.es", subject: "The subject of email 2", body:"The message of email 2" },
      { id: 3, from: "student3@upm.es", to: "profesor3@upm.es", subject: "The subject of email 3", body:"The message of email 3" },
      { id: 4, from: "student4@upm.es", to: "profesor4@upm.es", subject: "The subject of email 4", body:"The message of email 4" },
      { id: 5, from: "student5@upm.es", to: "profesor5@upm.es", subject: "The subject of email 5", body:"The message of email 5" },
      { id: 6, from: "student6@upm.es", to: "profesor6@upm.es", subject: "The subject of email 6", body:"The message of email 6" },
    ];
    return { emails };
  }

  genId(emails: Email[]): number {
    return emails.length > 0 ? Math.max(...emails.map(email => email.id)) + 1 : 11;
  }
}

import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email_id';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  email: Email
  emailsList: Email[] 

  constructor() {
    this.email = { id: 0, from: "", to: "", subject: "", body: "" }
    this.emailsList = [
      { id: 1, from: "student1@upm.es", to: "profesor1@upm.es", subject: "The subject of email 1", body:"The message of email 1" },
      { id: 2, from: "student2@upm.es", to: "profesor2@upm.es", subject: "The subject of email 2", body:"The message of email 2" },
      { id: 3, from: "student3@upm.es", to: "profesor3@upm.es", subject: "The subject of email 3", body:"The message of email 3" },
      { id: 4, from: "student4@upm.es", to: "profesor4@upm.es", subject: "The subject of email 4", body:"The message of email 4" },
      { id: 5, from: "student5@upm.es", to: "profesor5@upm.es", subject: "The subject of email 5", body:"The message of email 5" },
      { id: 6, from: "student6@upm.es", to: "profesor6@upm.es", subject: "The subject of email 6",},
    ]
  }

  generateId() {
    let max = 0;
    this.emailsList.forEach(email => {
      if (email.id > max) {
        max = email.id;
      } 
    });
    return max + 1;
  }

  addEmail(email: Email): void {
    this.emailsList.push(email);
  }

  getEmails(): Email[] {
    console.log(this.emailsList)
    return this.emailsList ;
  }

  getEmail(id: number): Email {
    return this.emailsList.filter(email => email.id === id)[0];
  }

  deleteEmail(id: number): Email[] {
    const index = this.emailsList.findIndex(email => email.id === id);
    return this.emailsList.splice(index, 1)
  }
}
//    }

//   getEmails(): Observable<Email[]> {
//     return this.http.get<Email[]>(this.emailsURL)
//       .pipe(
//         tap(res => console.log('fetched ' + res.length + ' emails')),
//         catchError(this.handleError<Email[]>('getEmails', []))
//       );
//   }

//   getEmail(id: number): Observable<Email> {
//     console.log(`Retreiving information of email: ${id}`); 
//     const url = `${this.emailsURL}/${id}`;
//     return this.http.get<Email>(url);
//   }

//   // generateId() {
//   //   let max = 0;
//   //   this.emailsList.forEach(email => {
//   //     if (email.id > max) {
//   //       max = email.id;
//   //     }
//   //   });
//   //   return max + 1;
//   // }

//   // addEmail(email: Email): void {
//   //   this.emailsList.push(email);
//   // }

//   addEmail(email?: Email): Observable<Email> {
//     return this.http.post<Email>(this.emailsURL, email, this.httpOptions).pipe(
//       tap((newEmail: Email) => console.log(`added email with id=${newEmail.id}`)),
//       catchError(this.handleError<Email>('addEmail'))
//     );
//   }

//   deleteEmail(email: Email | number): Observable<Email> {
//     var id = typeof email === 'number' ? email : email.id;
    
//     var url = `${this.emailsURL}/${id}`;
//     return this.http.delete<Email>(url, this.httpOptions);
//     /*return this.http.delete<Student>(url, this.httpOptions).pipe(
//       tap(_ => console.log(`deleted student id=${id}`)),
//       catchError(this.handleError<Student>('deleteStudent'))
//     );*/
//   }


//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {

//       console.error(`${operation} failed: ${error.message}`);
//       console.error(error); // log to console instead

//       this.error = `${operation} failed: ${error.message}`;

//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }

//   getError (): string | undefined {
//     return this.error; 
//   }
// }

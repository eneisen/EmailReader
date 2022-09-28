import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email_id';

@Pipe({
  name: 'withBodyFilter'
})
export class WithBodyFilterPipe implements PipeTransform {

  transform(allEmails: Email[], withBody: boolean): Email []{
    if (withBody)
      return allEmails.filter(email => (email.body != null));
    else 
      return allEmails
  }
}

import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { EmailReaderServiceComponent } from './email-reader-service/email-reader-service.component';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';


const routes: Routes = [
  { path: 'emailreaderbasic', component: EmailReaderBasicComponent },
  { path: 'emailreaderformcomponent', component: EmailReaderFormComponent },
  { path: 'emailreaderservice', component: EmailReaderServiceComponent },
  { path: 'emailslist', component: EmailsListComponent },
  { path: 'emailform', component: EmailFormComponent },
  { path: 'emailviewer/:id', component: EmailViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
      this.router.errorHandler = (error: any) => {
          this.router.navigate(['']); // when the URL does not match redirect to initial default route
      }
    }
  }
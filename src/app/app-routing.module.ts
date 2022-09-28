import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { EmailReaderServiceComponent } from './email-reader-service/email-reader-service.component';


const routes: Routes = [
  { path: 'emailreaderbasic', component: EmailReaderBasicComponent },
  { path: 'emailreaderformcomponent', component: EmailReaderFormComponent },
  { path: 'emailreaderservice', component: EmailReaderServiceComponent },  
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
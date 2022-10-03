import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { FormsModule } from '@angular/forms';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmailReaderServiceComponent } from './email-reader-service/email-reader-service.component';
import { WithBodyFilterPipe } from './pipes/with-body-filter.pipe';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    EmailReaderFormComponent,
    HighlightDirective,
    EmailReaderServiceComponent,
    WithBodyFilterPipe,
    EmailsListComponent,
    EmailFormComponent,
    EmailViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

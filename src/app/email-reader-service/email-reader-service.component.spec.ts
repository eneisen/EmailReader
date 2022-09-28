import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailReaderServiceComponent } from './email-reader-service/email-reader-service.component';

describe('EmailReaderFormComponent', () => {
  let component: EmailReaderFormComponent;
  let fixture: ComponentFixture<EmailReaderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailReaderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailReaderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

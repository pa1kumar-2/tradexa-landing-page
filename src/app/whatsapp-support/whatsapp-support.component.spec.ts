import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappSupportComponent } from './whatsapp-support.component';

describe('WhatsappSupportComponent', () => {
  let component: WhatsappSupportComponent;
  let fixture: ComponentFixture<WhatsappSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

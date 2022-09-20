import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGetStartComponent } from './dialog-get-start.component';

describe('DialogGetStartComponent', () => {
  let component: DialogGetStartComponent;
  let fixture: ComponentFixture<DialogGetStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGetStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogGetStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

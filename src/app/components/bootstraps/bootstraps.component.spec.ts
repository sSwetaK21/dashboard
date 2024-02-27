import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapsComponent } from './bootstraps.component';

describe('BootstrapsComponent', () => {
  let component: BootstrapsComponent;
  let fixture: ComponentFixture<BootstrapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapsComponent]
    });
    fixture = TestBed.createComponent(BootstrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordDetailComponent } from './cord-detail.component';

describe('CordDetailComponent', () => {
  let component: CordDetailComponent;
  let fixture: ComponentFixture<CordDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CordDetailComponent]
    });
    fixture = TestBed.createComponent(CordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

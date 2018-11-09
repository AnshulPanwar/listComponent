import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsLegosAngularLibComponent } from './sells-legos-angular-lib.component';

describe('SellsLegosAngularLibComponent', () => {
  let component: SellsLegosAngularLibComponent;
  let fixture: ComponentFixture<SellsLegosAngularLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellsLegosAngularLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellsLegosAngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

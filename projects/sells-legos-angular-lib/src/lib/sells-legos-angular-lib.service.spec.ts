import { TestBed } from '@angular/core/testing';

import { SellsLegosAngularLibService } from './sells-legos-angular-lib.service';

describe('SellsLegosAngularLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellsLegosAngularLibService = TestBed.get(SellsLegosAngularLibService);
    expect(service).toBeTruthy();
  });
});

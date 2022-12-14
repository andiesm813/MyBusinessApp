import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MyBusinessDataService } from './my-business-data.service';

describe('MyBusinessDataService', () => {
  let service: MyBusinessDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MyBusinessDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

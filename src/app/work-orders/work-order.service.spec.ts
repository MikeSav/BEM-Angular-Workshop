import { TestBed, inject } from '@angular/core/testing';

import { WorkOrderService } from './work-order.service';

describe('WorkOrderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkOrderService]
    });
  });

  it('should be created', inject([WorkOrderService], (service: WorkOrderService) => {
    expect(service).toBeTruthy();
  }));
});

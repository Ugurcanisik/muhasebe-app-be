import { Test, TestingModule } from '@nestjs/testing';
import { CustomerdetailsService } from '../customerdetails.service';

describe('CustomerdetailsService', () => {
  let service: CustomerdetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerdetailsService],
    }).compile();

    service = module.get<CustomerdetailsService>(CustomerdetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

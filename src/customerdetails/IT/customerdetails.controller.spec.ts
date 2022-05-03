import { Test, TestingModule } from '@nestjs/testing';
import { CustomerdetailsController } from '../customerdetails.controller';
import { CustomerdetailsService } from '../customerdetails.service';

describe('CustomerdetailsController', () => {
  let controller: CustomerdetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerdetailsController],
      providers: [CustomerdetailsService],
    }).compile();

    controller = module.get<CustomerdetailsController>(CustomerdetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

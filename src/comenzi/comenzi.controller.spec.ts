import { Test, TestingModule } from '@nestjs/testing';
import { ComenziController } from './comenzi.controller';

describe('ComenziController', () => {
  let controller: ComenziController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComenziController],
    }).compile();

    controller = module.get<ComenziController>(ComenziController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

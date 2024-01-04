import { Test, TestingModule } from '@nestjs/testing';
import { PasswordlessController } from './passwordless.controller';

describe('PasswordlessController', () => {
  let controller: PasswordlessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasswordlessController],
    }).compile();

    controller = module.get<PasswordlessController>(PasswordlessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

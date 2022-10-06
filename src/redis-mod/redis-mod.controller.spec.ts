import { Test, TestingModule } from '@nestjs/testing';
import { RedisModController } from './redis-mod.controller';
import { RedisModService } from './redis-mod.service';

describe('RedisModController', () => {
  let controller: RedisModController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedisModController],
      providers: [RedisModService],
    }).compile();

    controller = module.get<RedisModController>(RedisModController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

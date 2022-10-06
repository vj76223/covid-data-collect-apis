import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModController } from './redis-cache-mod.controller';
import { RedisCacheModService } from './redis-cache-mod.service';

describe('RedisCacheModController', () => {
  let controller: RedisCacheModController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedisCacheModController],
      providers: [RedisCacheModService],
    }).compile();

    controller = module.get<RedisCacheModController>(RedisCacheModController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

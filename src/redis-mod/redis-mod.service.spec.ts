import { Test, TestingModule } from '@nestjs/testing';
import { RedisModService } from './redis-mod.service';

describe('RedisModService', () => {
  let service: RedisModService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisModService],
    }).compile();

    service = module.get<RedisModService>(RedisModService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

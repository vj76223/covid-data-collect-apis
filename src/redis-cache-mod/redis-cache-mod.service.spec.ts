import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheModService } from './redis-cache-mod.service';

describe('RedisCacheModService', () => {
  let service: RedisCacheModService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisCacheModService],
    }).compile();

    service = module.get<RedisCacheModService>(RedisCacheModService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

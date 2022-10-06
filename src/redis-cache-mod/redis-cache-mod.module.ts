import { Module } from '@nestjs/common';
import { RedisCacheModService } from './redis-cache-mod.service';
import { RedisCacheModController } from './redis-cache-mod.controller';

@Module({
  controllers: [RedisCacheModController],
  providers: [RedisCacheModService]
})
export class RedisCacheModModule {}

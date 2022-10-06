import { Module } from '@nestjs/common';
import { RedisModService } from './redis-mod.service';
import { RedisModController } from './redis-mod.controller';

@Module({
  controllers: [RedisModController],
  providers: [RedisModService]
})
export class RedisModModule {}

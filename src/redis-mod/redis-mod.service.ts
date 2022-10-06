import { Injectable } from '@nestjs/common';
import { CreateRedisModDto } from './dto/create-redis-mod.dto';

@Injectable()
export class RedisModService {
  create(createRedisModDto: CreateRedisModDto) {
    return 'This action adds a new redisMod';
  }

  // update(id: number, updateRedisModDto: UpdateRedisModDto) {
  //   return `This action updates a #${id} redisMod`;
  // }

  remove(id: number) {
    return `This action removes a #${id} redisMod`;
  }
}

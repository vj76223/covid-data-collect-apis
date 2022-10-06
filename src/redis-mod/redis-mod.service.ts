import { Injectable } from '@nestjs/common';
import { CreateRedisModDto } from './dto/create-redis-mod.dto';
import { UpdateRedisModDto } from './dto/update-redis-mod.dto';

@Injectable()
export class RedisModService {
  create(createRedisModDto: CreateRedisModDto) {
    return 'This action adds a new redisMod';
  }

  findAll() {
    return `This action returns all redisMod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} redisMod`;
  }

  update(id: number, updateRedisModDto: UpdateRedisModDto) {
    return `This action updates a #${id} redisMod`;
  }

  remove(id: number) {
    return `This action removes a #${id} redisMod`;
  }
}

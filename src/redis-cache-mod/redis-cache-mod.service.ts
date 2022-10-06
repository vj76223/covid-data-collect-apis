import { Injectable } from '@nestjs/common';
import { CreateRedisCacheModDto } from './dto/create-redis-cache-mod.dto';
import { UpdateRedisCacheModDto } from './dto/update-redis-cache-mod.dto';

@Injectable()
export class RedisCacheModService {
  create(createRedisCacheModDto: CreateRedisCacheModDto) {
    return 'This action adds a new redisCacheMod';
  }

  findAll() {
    return `This action returns all redisCacheMod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} redisCacheMod`;
  }

  update(id: number, updateRedisCacheModDto: UpdateRedisCacheModDto) {
    return `This action updates a #${id} redisCacheMod`;
  }

  remove(id: number) {
    return `This action removes a #${id} redisCacheMod`;
  }
}

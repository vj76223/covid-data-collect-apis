import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RedisModService } from './redis-mod.service';
import { CreateRedisModDto } from './dto/create-redis-mod.dto';
import { UpdateRedisModDto } from './dto/update-redis-mod.dto';

@Controller()
export class RedisModController {
  constructor(private readonly redisModService: RedisModService) {}

  @MessagePattern('createRedisMod')
  create(@Payload() createRedisModDto: CreateRedisModDto) {
    return this.redisModService.create(createRedisModDto);
  }

  @MessagePattern('findAllRedisMod')
  findAll() {
    return this.redisModService.findAll();
  }

  @MessagePattern('findOneRedisMod')
  findOne(@Payload() id: number) {
    return this.redisModService.findOne(id);
  }

  @MessagePattern('updateRedisMod')
  update(@Payload() updateRedisModDto: UpdateRedisModDto) {
    return this.redisModService.update(updateRedisModDto.id, updateRedisModDto);
  }

  @MessagePattern('removeRedisMod')
  remove(@Payload() id: number) {
    return this.redisModService.remove(id);
  }
}

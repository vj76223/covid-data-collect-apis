import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RedisCacheModService } from './redis-cache-mod.service';
import { CreateRedisCacheModDto } from './dto/create-redis-cache-mod.dto';
import { UpdateRedisCacheModDto } from './dto/update-redis-cache-mod.dto';

@Controller()
export class RedisCacheModController {
  constructor(private readonly redisCacheModService: RedisCacheModService) {}

  @MessagePattern('createRedisCacheMod')
  create(@Payload() createRedisCacheModDto: CreateRedisCacheModDto) {
    return this.redisCacheModService.create(createRedisCacheModDto);
  }

  @MessagePattern('findAllRedisCacheMod')
  findAll() {
    return this.redisCacheModService.findAll();
  }

  @MessagePattern('findOneRedisCacheMod')
  findOne(@Payload() id: number) {
    return this.redisCacheModService.findOne(id);
  }

  @MessagePattern('updateRedisCacheMod')
  update(@Payload() updateRedisCacheModDto: UpdateRedisCacheModDto) {
    return this.redisCacheModService.update(updateRedisCacheModDto.id, updateRedisCacheModDto);
  }

  @MessagePattern('removeRedisCacheMod')
  remove(@Payload() id: number) {
    return this.redisCacheModService.remove(id);
  }
}

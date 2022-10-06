import { PartialType } from '@nestjs/mapped-types';
import { CreateRedisCacheModDto } from './create-redis-cache-mod.dto';

export class UpdateRedisCacheModDto extends PartialType(CreateRedisCacheModDto) {
  id: number;
}

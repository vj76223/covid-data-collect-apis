import { PartialType } from '@nestjs/mapped-types';
import { CreateRedisModDto } from './create-redis-mod.dto';

export class UpdateRedisModDto extends PartialType(CreateRedisModDto) {
  id: number;
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { RedisModModule } from './redis-mod/redis-mod.module';
import { RedisCacheModModule } from './redis-cache-mod/redis-cache-mod.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [PatientModule, DoctorModule, DBModule.forRoot(options), RedisCacheModModule, RedisModModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

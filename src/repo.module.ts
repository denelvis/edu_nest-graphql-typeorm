import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoService from './repo.service';
import Driver from './db/models/driver.entity';
import Car from './db/models/car.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Driver, Car])],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}
export default RepoModule;

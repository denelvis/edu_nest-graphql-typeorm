import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Driver from './db/models/driver.entity';
import Car from './db/models/car.entity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(Driver) public readonly driverRepo: Repository<Driver>,
    @InjectRepository(Car) public readonly carRepo: Repository<Car>,
  ) {}
}

export default RepoService;

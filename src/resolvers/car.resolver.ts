import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import RepoService from '../repo.service';
import Driver from '../db/models/driver.entity';
import Car from '../db/models/car.entity';
import CarInput from './input/car.input';

@Resolver(Car)
class CarResolver {
  constructor(private readonly repoService: RepoService) {}
  @Query(() => [Car])
  public async cars(): Promise<Car[]> {
    return this.repoService.carRepo.find();
  }
  @Query(() => Car, { nullable: true })
  public async car(@Args('id') id: number): Promise<Car> {
    return this.repoService.carRepo.findOne({ where: { id } });
  }

  @Mutation(() => Car)
  public async createCar(@Args('data') input: CarInput): Promise<Car> {
    const car = new Car();
    car.model = input.model;
    return this.repoService.carRepo.save(car);
  }

  @ResolveProperty()
  public async driver(@Parent() parent): Promise<Driver> {
    return this.repoService.driverRepo.findOne(parent.driverId);
  }
}

export default CarResolver;

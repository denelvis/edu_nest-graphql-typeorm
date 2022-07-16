import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import Driver from '../db/models/driver.entity';
import RepoService from '../repo.service';
import DriverInput from './input/driver.input';

@Resolver()
class DriverResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Driver])
  public async drivers(): Promise<Driver[]> {
    return this.repoService.driverRepo.find();
  }
  @Query(() => Driver, { nullable: true })
  public async driver(@Args('id') id: number): Promise<Driver> {
    return this.repoService.driverRepo.findOne({ where: { id } });
  }

  @Mutation(() => Driver)
  public async createDriver(@Args('data') input: DriverInput): Promise<Driver> {
    const driver = this.repoService.driverRepo.create({ name: input.name });
    return this.repoService.driverRepo.save(driver);
  }
}
export default DriverResolver;

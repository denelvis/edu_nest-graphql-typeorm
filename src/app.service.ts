import { Injectable } from '@nestjs/common';
import RepoService from './repo.service';

@Injectable()
export class AppService {
  constructor(private readonly repoService: RepoService) {}

  async getCountCars(): Promise<string> {
    return `Total cars are ${await this.repoService.carRepo.count()}`;
  }
}

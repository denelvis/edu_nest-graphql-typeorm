import { driverCarsLoader } from '../db/loaders/car.loader';

export interface IGraphQLContext {
  driverCarsLoader: ReturnType<typeof driverCarsLoader>;
}

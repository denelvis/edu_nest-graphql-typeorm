import DataLoader = require('dataloader');
import Car from '../models/car.entity';
import { connectionSource } from '../../config/orm';

const batchCars = async (driverIds: string[]) => {
  const carDrivers = await connectionSource
    .getRepository(Car)
    .createQueryBuilder('carDrivers')
    .leftJoinAndSelect('cars.driver', 'car')
    .where('cars.id IN(:...ids)', { ids: driverIds })
    .getMany();
  const driverIdToCars: { [key: string]: Car[] } = {};
  carDrivers.forEach((carDriver) => {
    if (!driverIdToCars[carDriver.driverId]) {
      driverIdToCars[carDriver.driverId] = [(carDriver as any).__car__];
    } else {
      driverIdToCars[carDriver.driverId].push((carDriver as any).__car__);
    }
  });
  return driverIds.map((driverId) => driverIdToCars[driverId]);
};
const driverCarsLoader = () => new DataLoader(batchCars);

export { driverCarsLoader };

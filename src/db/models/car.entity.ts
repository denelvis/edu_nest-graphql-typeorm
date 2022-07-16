import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Driver from './driver.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity({ name: 'cars' })
export default class Car {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  model: string;

  @Field()
  @Column({ name: 'driver_id' })
  driverId: number;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => Driver)
  driver: Driver;

  @ManyToOne(() => Driver, (driver) => driver.carConnection, {
    persistence: true,
  })
  @JoinColumn({ name: 'driver_id' })
  driverConnection: Promise<Driver>;
}

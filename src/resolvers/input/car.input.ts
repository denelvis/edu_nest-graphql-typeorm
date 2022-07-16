import { Field, InputType } from 'type-graphql';
import DriverInput from './driver.input';

@InputType()
class CarDriverConnectInput {
  @Field()
  readonly id: number;
}

@InputType()
class CarDriverInput {
  @Field({ nullable: true })
  readonly connect: CarDriverConnectInput;

  @Field({ nullable: true })
  readonly create: DriverInput;
}

@InputType()
class CarInput {
  @Field()
  readonly model: string;

  @Field()
  readonly driver: CarDriverInput;
}

export default CarInput;

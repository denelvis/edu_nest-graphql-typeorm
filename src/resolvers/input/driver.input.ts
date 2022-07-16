import { Field, InputType } from 'type-graphql';

@InputType()
class DriverInput {
  @Field()
  readonly name: string;
}

export default DriverInput;

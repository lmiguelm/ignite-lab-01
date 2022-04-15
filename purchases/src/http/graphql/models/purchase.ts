import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

enum PurschasesStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  FAILED = 'FAILED',
}

registerEnumType(PurschasesStatus, {
  name: 'PurschasesStatus',
  description: 'Available purchase statuses',
});

@ObjectType()
export class Purchase {
  @Field(() => ID)
  id: string;

  @Field(() => PurschasesStatus)
  status: PurschasesStatus;

  @Field(() => Date)
  createdAt: Date;
}

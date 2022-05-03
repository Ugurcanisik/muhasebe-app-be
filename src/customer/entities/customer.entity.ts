import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../configrations/database/abstract.entity';

@Entity('Customer')
export class Customer extends AbstractEntity {
  @Column({ type: 'varchar', length: 200, nullable: true })
  namelastname: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  tc: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  secondemail: string;

  @Column({ type: 'timestamptz', nullable: true })
  startdate: Date;

  @Column({ type: 'timestamptz', nullable: true })
  enddate: Date;
}

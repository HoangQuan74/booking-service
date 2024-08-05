import { BaseEntity } from 'src/database/entities/base-entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { EnumGender } from 'src/common/enums';
import { IUser } from 'src/common/interfaces/user.interface';
import { hashPassword } from 'src/utils/bcrypt';

@Entity('users')
export class UserEntity extends BaseEntity implements IUser {
  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true })
  active: boolean;

  @Column({ name: 'email_verified_at', type: 'bigint', nullable: true })
  emailVerifiedAt: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'phone_number', nullable: true })
  phoneNumber: string;

  @Column({ name: 'date_of_birth', type: 'date', nullable: true })
  dateOfBirth: string;

  @Column({ name: 'last_login', type: 'bigint', default: null })
  lastLogin: number;

  @Column({ name: 'gender', nullable: true })
  gender: EnumGender;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = hashPassword(this.password);
    }
  }
}

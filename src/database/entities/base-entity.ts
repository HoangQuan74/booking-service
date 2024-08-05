import { IBaseEntity } from 'src/common/interfaces';
import { getCurrentTime } from 'src/utils/time';
import { BeforeInsert, BeforeUpdate, Column, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint', name: 'created_at' })
  createdAt: number;

  @Column({ type: 'bigint', name: 'updated_at' })
  updatedAt: number;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = getCurrentTime();
  }

  @BeforeInsert()
  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = getCurrentTime();
  }
}

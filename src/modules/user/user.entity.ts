import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { createCipher } from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500, unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ length: 500 })
  firstName: string;

  @Column({ length: 500 })
  lastName: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    if (this.password) {
      const cipher = createCipher('aes-256-ctr', 'nest-workshop');
      this.password =
        (await cipher.update(this.password, 'utf8', 'hex')) +
        cipher.final('hex');
    } else {
      this.password = null;
    }
  }

  constructor(partialUser?: Partial<User>) {
    if (partialUser) {
      Object.assign(this, partialUser);
    }
  }
}

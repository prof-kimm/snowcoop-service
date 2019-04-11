import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  street: string;

  @Column({ length: 255 })
  city: string;

  @Column({ length: 255 })
  province: string;

  @Column({ length: 255 })
  postalCode: string;

  @Column({ length: 255 })
  lat: string;

  @Column({ length: 255 })
  lng: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  constructor(partialAddress?: Partial<Address>) {
    if (partialAddress) {
      Object.assign(this, partialAddress);
    }
  }
}

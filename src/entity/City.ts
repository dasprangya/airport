import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Country } from './Country';

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    is_active!: boolean;

    @Column('decimal', { precision: 10, scale: 6 })
    lat!: number;

    @Column('decimal', { precision: 10, scale: 6 })
    long!: number;

    @ManyToOne(() => Country)
    countryId!: Country;
}

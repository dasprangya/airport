import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { City } from './City';
import { Country } from './Country';

@Entity()
export class Airport {
    @PrimaryGeneratedColumn()
    id!: number;  // Use `!` for definite assignment

    @Column()
    icao_code!: string;  // Use `!` for definite assignment

    @Column()
    iata_code!: string;  // Use `!` for definite assignment

    @Column()
    name!: string;  // Use `!` for definite assignment

    @Column()
    type!: string;  // Use `!` for definite assignment

    @Column('decimal', { precision: 10, scale: 6 })
    latitude_deg!: number;  // Use `!` for definite assignment

    @Column('decimal', { precision: 10, scale: 6 })
    longitude_deg!: number;  // Use `!` for definite assignment

    @Column()
    elevation_ft!: number;  // Use `!` for definite assignment

    @ManyToOne(() => City)
    address!: City;  // Use `!` for definite assignment

    @ManyToOne(() => Country)
    country!: Country;  // Use `!` for definite assignment
}

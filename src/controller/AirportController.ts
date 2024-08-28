import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Airport } from '../entity/Airport';

export const getAirportByIataCode = async (req: Request, res: Response) => {
    const { iata_code } = req.params;

    try {
        const airport = await AppDataSource.getRepository(Airport).findOne({
            where: { iata_code },
            relations: ['address', 'country'],
        });

        if (!airport) {
            return res.status(404).json({ message: 'Airport not found' });
        }

        return res.json({
            airport: {
                id: airport.id,
                icao_code: airport.icao_code,
                iata_code: airport.iata_code,
                name: airport.name,
                type: airport.type,
                latitude_deg: airport.latitude_deg,
                longitude_deg: airport.longitude_deg,
                elevation_ft: airport.elevation_ft,
                address: {
                    city: {
                        id: airport.address.id,
                        name: airport.address.name,
                        country_id: airport.address.countryId,
                        is_active: airport.address.is_active,
                        lat: airport.address.lat,
                        long: airport.address.long,
                    },
                },
                country: {
                    id: airport.country.id,
                    name: airport.country.name,
                    country_code_two: airport.country.country_code_two,
                    country_code_three: airport.country.country_code_three,
                    mobile_code: airport.country.mobile_code,
                    continent_id: airport.country.continent_id,
                },
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

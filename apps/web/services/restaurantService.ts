import { IRestaurant } from 'schema';
import { createBackendAxiosRequest } from '.';

export const fetchRestaurants = async (): Promise<IRestaurant[]> => {
    const result = await createBackendAxiosRequest<any>({
        method: 'GET',
        url: `/restaurants/`
    });

    return result.data;
};

export const reviewRestaurant = async (roomId: string, restaurant: IRestaurant): Promise<IRestaurant> => {
    const result = await createBackendAxiosRequest<any>({
        method: 'POST',
        url: `/room/${roomId}`,
        data: { restaurant }
    });

    return result.data;
};

import { IRoom } from 'schema';
import { createBackendAxiosRequest } from '.';

export const createRoom = async (hostId: string): Promise<IRoom> => {
    const result = await createBackendAxiosRequest<any>({
        method: 'POST',
        url: `/room/`,
        data: { hostId }
    });

    return result.data.room;
};

export const fetchRoom = async (roomId: string): Promise<IRoom> => {
    const result = await createBackendAxiosRequest<any>({
        method: 'GET',
        url: `/room/${roomId}`
    });

    return result.data.room;
};

export const joinRoom = async (roomId: string, uid: string): Promise<IRoom> => {
    const result = await createBackendAxiosRequest<any>({
        method: 'POST',
        url: `/room/${roomId}`,
        data: { uid }
    });

    return result.data.room;
};

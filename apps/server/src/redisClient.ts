import { createClient } from 'redis';

export const redisClient = createClient();

(async () => {
    redisClient.on("error", (err) => console.error("Redis client error:", err));
    await redisClient.connect();
})();

export const setJSON = async <T>(key:string, json: T): Promise<string> => {
    const value = await redisClient.set(key, JSON.stringify(json));
    return value ?? "";
};

export const getJSON = async <T>(key:string): Promise<T> => {
    const value = await redisClient.get(key);
    return JSON.parse(value ?? "null") as T;
};

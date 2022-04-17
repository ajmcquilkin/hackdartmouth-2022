export interface IRestaurant {

};

export interface IRoom {
    id: string;
    hostId: string;
    participants: string[];
    restaurants: IRestaurant[];
};

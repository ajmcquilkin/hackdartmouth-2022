import { response } from "express";
import { RequestHandler } from 'express';
import dotenv from 'dotenv';
dotenv.config();
type Settings = {
    location: string;
    categories: string[];
    price: string;
    open_now: boolean;
    limit: number;
}

type SearchRequest = {
    location: string;
    term: string;
    price: string;
    open_now: boolean;
}

const yelp = require('yelp-fusion')
const client = yelp.client(process.env.API_KEY);

export const ex_response = {
    location: 'south san francisco, ca',
    categories: ['Chinese', 'Mexican'],
    price: '1,2,3,4',
    open_now: true,
    limit: 7,
}

const global_limit = ex_response.limit;

// Get response
export function handle_response(searchRequest: Settings) {
    let categories: string[] = searchRequest.categories;

    return Promise.all(
        categories
        .map((category: string) => ({
            ...searchRequest,
            term: category,
            categories: undefined,
            limit: Math.ceil(searchRequest.limit/searchRequest.categories.length)
        }))
        .map(get_list))
        .then(combine_list)
        // .then((thing) => console.dir(thing, {depth:null}))
        // .catch(console.log)
}

// Combine list of responses
function get_list(searchRequest: Object) {

    return client.search(searchRequest)
    .then((res: { jsonBody: any; }) => {
        // console.log(res.jsonBody)
        return res.jsonBody
    })
}

function combine_list(combined: any[]) {

    return combined.flatMap(response => response.businesses).slice(0,global_limit);
}

export const giveRestaurants: RequestHandler = async (req, res, next) => {
    try {

        const restaurants = await handle_response(req.body)
        res.json(restaurants);

    } catch (error) {
        next(error);
    }
};

import React, { useState, useEffect } from "react";
import styles from "./selection.module.scss";
import { Button, Ranking } from "ui";
import { useDispatch } from "react-redux";
import { Selection } from "./selection";
import { useRouter } from "next/router";


export const Selections = (props: any) => {


  let rest2 = [
    {
        "id": "0piv8Y-TaJltsQDhu4Ngwg",
        "alias": "ming-hui-dim-sum-san-francisco",
        "name": "Ming Hui Dim Sum",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/1jTdyxHMgszycLAJPEeLpw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ming-hui-dim-sum-san-francisco?adjust_creative=pmxx9CwNOjK2IJCGmQtkbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pmxx9CwNOjK2IJCGmQtkbA",
        "review_count": 47,
        "categories": [
            {
                "alias": "dimsum",
                "title": "Dim Sum"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 37.7305240809599,
            "longitude": -122.404693529567
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "2495 San Bruno Ave",
            "address2": "",
            "address3": null,
            "city": "San Francisco",
            "zip_code": "94134",
            "country": "US",
            "state": "CA",
            "display_address": [
                "2495 San Bruno Ave",
                "San Francisco, CA 94134"
            ]
        },
        "phone": "+14154686188",
        "display_phone": "(415) 468-6188",
        "distance": 8700.054658888472
    },
    {
        "id": "WKtGwSIbpCE7g_8QG2slZw",
        "alias": "cafe-colma-colma",
        "name": "Cafe Colma",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/HGHmLMdmdKwE_pfyhxlqAw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/cafe-colma-colma?adjust_creative=pmxx9CwNOjK2IJCGmQtkbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pmxx9CwNOjK2IJCGmQtkbA",
        "review_count": 399,
        "categories": [
            {
                "alias": "filipino",
                "title": "Filipino"
            },
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            }
        ],
        "rating": 3.5,
        "coordinates": {
            "latitude": 37.6799,
            "longitude": -122.45259
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "1700 Hillside Blvd",
            "address2": "",
            "address3": "",
            "city": "Colma",
            "zip_code": "94014",
            "country": "US",
            "state": "CA",
            "display_address": [
                "1700 Hillside Blvd",
                "Colma, CA 94014"
            ]
        },
        "phone": "+16507582237",
        "display_phone": "(650) 758-2237",
        "distance": 3909.837326498187
    },
    {
        "id": "RMep0Zj9dzQUUJX2mE_sVA",
        "alias": "leanns-cafe-burlingame-3",
        "name": "Leann's Cafe",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/0YfDQe0xJDFWajREw1eP4w/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/leanns-cafe-burlingame-3?adjust_creative=pmxx9CwNOjK2IJCGmQtkbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pmxx9CwNOjK2IJCGmQtkbA",
        "review_count": 462,
        "categories": [
            {
                "alias": "diners",
                "title": "Diners"
            },
            {
                "alias": "panasian",
                "title": "Pan Asian"
            },
            {
                "alias": "burgers",
                "title": "Burgers"
            }
        ],
        "rating": 3.5,
        "coordinates": {
            "latitude": 37.58997030946027,
            "longitude": -122.35000494629087
        },
        "transactions": [
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "777 Airport Blvd",
            "address2": "",
            "address3": "",
            "city": "Burlingame",
            "zip_code": "94010",
            "country": "US",
            "state": "CA",
            "display_address": [
                "777 Airport Blvd",
                "Burlingame, CA 94010"
            ]
        },
        "phone": "+16503428248",
        "display_phone": "(650) 342-8248",
        "distance": 9566.831352153702
    },
    {
        "id": "aor5U_cIBBQJWZLu90qmXg",
        "alias": "buffalo-kitchen-san-francisco-2",
        "name": "Buffalo Kitchen",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/pqyGgd1n0Y0q_8XhyZHA6g/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/buffalo-kitchen-san-francisco-2?adjust_creative=pmxx9CwNOjK2IJCGmQtkbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pmxx9CwNOjK2IJCGmQtkbA",
        "review_count": 66,
        "categories": [
            {
                "alias": "dimsum",
                "title": "Dim Sum"
            }
        ],
        "rating": 3.5,
        "coordinates": {
            "latitude": 37.7118,
            "longitude": -122.40592
        },
        "transactions": [
            "delivery"
        ],
        "price": "$",
        "location": {
            "address1": "107 Leland Ave",
            "address2": "",
            "address3": "",
            "city": "San Francisco",
            "zip_code": "94134",
            "country": "US",
            "state": "CA",
            "display_address": [
                "107 Leland Ave",
                "San Francisco, CA 94134"
            ]
        },
        "phone": "+14155862986",
        "display_phone": "(415) 586-2986",
        "distance": 6644.777532289524
    },
    {
        "id": "AsFaNLcNb_ndMPfSEqgpsA",
        "alias": "la-tapatia-mexicatessen-south-san-francisco",
        "name": "La Tapatia Mexicatessen",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/DXlHgVLbLZkJ-BEguz07dg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/la-tapatia-mexicatessen-south-san-francisco?adjust_creative=pmxx9CwNOjK2IJCGmQtkbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pmxx9CwNOjK2IJCGmQtkbA",
        "review_count": 738,
        "categories": [
            {
                "alias": "mexican",
                "title": "Mexican"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 37.655495785883225,
            "longitude": -122.4129906
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "411 Grand Ave",
            "address2": "",
            "address3": "",
            "city": "South San Francisco",
            "zip_code": "94080",
            "country": "US",
            "state": "CA",
            "display_address": [
                "411 Grand Ave",
                "South San Francisco, CA 94080"
            ]
        },
        "phone": "+16505895881",
        "display_phone": "(650) 589-5881",
        "distance": 909.8434407996388
    },
    {
        "id": "zA2o4x3OOFviH_f0ForwAQ",
        "alias": "taco-bell-south-san-francisco",
        "name": "Taco Bell",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/MMX6y0tkaxKMY4G1AQHAww/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/taco-bell-south-san-francisco?adjust_creative=pmxx9CwNOjK2IJCGmQtkbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pmxx9CwNOjK2IJCGmQtkbA",
        "review_count": 271,
        "categories": [
            {
                "alias": "hotdogs",
                "title": "Fast Food"
            },
            {
                "alias": "mexican",
                "title": "Mexican"
            }
        ],
        "rating": 1.5,
        "coordinates": {
            "latitude": 37.6468583122892,
            "longitude": -122.428755338605
        },
        "transactions": [
            "delivery"
        ],
        "price": "$",
        "location": {
            "address1": "465 El Camino Real",
            "address2": "",
            "address3": "",
            "city": "South San Francisco",
            "zip_code": "94080",
            "country": "US",
            "state": "CA",
            "display_address": [
                "465 El Camino Real",
                "South San Francisco, CA 94080"
            ]
        },
        "phone": "+16505833473",
        "display_phone": "(650) 583-3473",
        "distance": 906.0464265798865
    },
    {
        "id": "7ZXeego__AD9HkvmvgfLtw",
        "alias": "breakers-breakfast-brunch-and-lunch-pacifica",
        "name": "Breakers Breakfast, Brunch & Lunch",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/fAor2X07LY56gtkugtRWPw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/breakers-breakfast-brunch-and-lunch-pacifica?adjust_creative=pmxx9CwNOjK2IJCGmQtkbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pmxx9CwNOjK2IJCGmQtkbA",
        "review_count": 745,
        "categories": [
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            },
            {
                "alias": "burgers",
                "title": "Burgers"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 37.609742,
            "longitude": -122.4965504
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "145 Rockaway Beach Ave",
            "address2": null,
            "address3": "",
            "city": "Pacifica",
            "zip_code": "94044",
            "country": "US",
            "state": "CA",
            "display_address": [
                "145 Rockaway Beach Ave",
                "Pacifica, CA 94044"
            ]
        },
        "phone": "+16505571274",
        "display_phone": "(650) 557-1274",
        "distance": 8102.759819208846
    }
]
  

  const dispatch = useDispatch();

  const [ratings, setRatings] = useState({});
  const [selection, setSelection] = useState(0);


  const getSelection = (id: string, number: number) => {
    setRatings({...ratings, [id]:number})
    // setSelection(props);
    console.log(ratings);
  
    
    // Go to next selection
    // GET RESULTS HERE
  }

  const vetoed = (id: string) => {
    setRatings({...ratings, [id]:-999})
    // setSelection(-999);
    // console.log(selection);
  
    // Go to next selection
    // GET RESULTS HERE
  }

  const router = useRouter();


  const handleResults = () => {
    // dispatch(createRoomRequest(hostId));
    router.push("/results");
  };

  return(
    <div className={styles.page}>
        {rest2.map((data : any) => (
            <Selection
              name={data.name}
              location={data.location.display_address[0]}
              category={data.categories?.[0]?.title}
              price={data.price}
              imageUrl={data.image_url}
              id={data.id}
              vetoed={vetoed}
              getSelection={getSelection}
              />
        ))}

        {Object.keys(ratings).length >= rest2.length ? handleResults():null}
    </div>
  )
};

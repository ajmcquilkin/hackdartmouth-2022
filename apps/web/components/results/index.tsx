import * as React from "react";
import styles from "./results.module.scss";
import { RankCard } from "ui";

export const Result = (props: any) => {
  let ranks =['1st', '2nd', '3rd']
  let rest = [
    
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
  ]


  return(
    <div className={styles.page}>
        <h1 className={styles.header}>RESULTS</h1>
        
        {rest.map((data, i) => (
          <div className={styles.ranks}>
            <RankCard
              name={data.name}
              place={ranks[i]}
              imageUrl={data.image_url}
              cardInfo={data.location.display_address[0]}/>
          </div>
        ))}
    </div>
  )
};

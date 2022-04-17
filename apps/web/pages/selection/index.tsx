import React, { useState } from "react";
import { Selections } from "../../components/selections"

export default function SelectionPage() {

  return (
    <div>
      <Selections
        name='Pizza Place'
        location=' 122 East St, New York'
        category='American'
        price='$$'
        imageUrl="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
      ></Selections>
    </div>
  );
}

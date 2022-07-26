import React from 'react'
import { useDispatch, useSelector } from "react-redux";

/**
* @author
* @function RestaurantPage
**/

function RestaurantPage (props) {
  const dispatch = useDispatch();
  const selectedRestaurant = useSelector((state) => state.selectedRestaurant.activeRestaurant);
  console.log(selectedRestaurant)
  debugger;

  return(
    <div>
        <h1>{selectedRestaurant.businessName}</h1>
        <h2>{selectedRestaurant.subCategoryId}</h2>
        <p>{selectedRestaurant.description}</p>
    </div>
   )

 }

 export default RestaurantPage;
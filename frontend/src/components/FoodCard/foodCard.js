import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./foodCard.css";
import filterFoods from "../../services/filterFoods";
import NoFoodFound from "../NoFoodFound/noFoodFound";
import {selectedRestaurant} from "../../store/slices/activeRestaurantSlice"

/**
 * @author
 * @function FoodCard
 **/

const { Meta } = Card;

function FoodCard({ searchText, restaurantList, filters }) {
  const history = useNavigate();
  const dispatch =useDispatch();
  const restaurantLists = filterFoods(restaurantList, filters, searchText);
  const vegHref =
    "data:image/png;base64,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";
  const nonVegHref =
    "https://i0.wp.com/foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg?zoom=2";

  function handleChangeFoodPage(e) {    
    dispatch(selectedRestaurant(e))
    history("/restaurant");
  }

  return (
    <>
      {searchText ? (
        <h4 className="cardCount">
          {`Showing `}
          <strong>{restaurantLists.length}</strong> {`restaurants for `}
          <strong>{searchText}</strong>
        </h4>
      ) : (
        <h4 className="cardCount">
          {`Showing `}
          <strong>{restaurantLists.length}</strong> {`restaurants`}
        </h4>
      )}
      {restaurantLists.length ? (
        restaurantLists.map(
          ({
            businessName,
            description,
            numberOfOrderedPlaced,
            vendorRating,
            businessCoverImage,
            subCategoryId,
            productPrice,
            isVeg,
          }) => {
            return (
              <div className="card">
                <a
                  className="foodCardLink"
                  onClick={() =>
                    handleChangeFoodPage({
                      businessName,
                      description,
                      numberOfOrderedPlaced,
                      vendorRating,
                      businessCoverImage,
                      subCategoryId,
                      productPrice,
                      isVeg,
                    })
                  }
                >
                  <Card
                    hoverable
                    style={{ height: 50 }}
                    cover={
                      <img
                        className="cardpic"
                        alt="example"
                        src={businessCoverImage}
                      />
                    }
                  >
                    <div className="cardContent">
                      <p className="cardTitle">{businessName}</p>
                      {isVeg != undefined && (
                        <img
                          className="itemtype"
                          src={isVeg ? vegHref : nonVegHref}
                          alt="veg"
                        />
                      )}
                      <p className="rating">
                        <h6>{vendorRating}</h6>
                        {productPrice && (
                          <h5 className="Cardprice">{`$${productPrice}`}</h5>
                        )}
                      </p>
                    </div>
                    <p className="cardDesc">{subCategoryId}</p>
                    <p className="cardMessgae">
                      {numberOfOrderedPlaced &&
                        `${numberOfOrderedPlaced}+ orders placed recently`}
                    </p>
                  </Card>
                </a>
              </div>
            );
          }
        )
      ) : (
        <NoFoodFound />
      )}
    </>
  );
}

export default FoodCard;

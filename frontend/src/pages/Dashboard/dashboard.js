import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

import "./dashboard.css";
import FoodCard from "../../components/FoodCard/foodCard";
import NavBar from "../../components/NavBar/navbar";
import FoodIcon from "../../components/FoodIcon/foodIcon";
import {restaurantList} from "../../restaurantList"
import {
addInitialRestaurantList
} from "../../store/slices/restaurantListSlice";
import RestaurantsFilter from "../../components/RestaurantsFilter/restaurantsFilter"

function Dashboard(props) {
  const [searchText, setSearchText] = useState("");
  const isLoggedIn = Cookies.get("jwtAuth");
  const dispatch = useDispatch();

  const foodIcons = [
    { imageTitle: "Indian", imageHref: "bibimbap.png" },
    { imageTitle: "American", imageHref: "diet.png" },
    { imageTitle: "Indian", imageHref: "salad.png" },
    { imageTitle: "Indian", imageHref: "salad.png" },
    { imageTitle: "American", imageHref: "diet.png" },
    { imageTitle: "Indian", imageHref: "bibimbap.png" },
    { imageTitle: "American", imageHref: "diet.png" },
    { imageTitle: "Indian", imageHref: "salad.png" },
    { imageTitle: "Indian", imageHref: "salad.png" },
    { imageTitle: "American", imageHref: "diet.png" },
    { imageTitle: "Indian", imageHref: "bibimbap.png" },
    { imageTitle: "American", imageHref: "diet.png" },
  ];

  function handleChangeSearch(e) {
    const searchValue = e.target.value;
    setSearchText(searchValue);
  }

  useEffect(()=>{    
    dispatch(addInitialRestaurantList(restaurantList))
  },[])

  const restaurantLists = useSelector((state) => state.restaurantList.restaurantList);    
  const filters = useSelector((state) => state.filter.filter);  

  return (
    <>
      <NavBar
        isLoggedIn={isLoggedIn}
        login="Login"
        shouldNavBarTitleRender
        handleChangeSearch={handleChangeSearch}
        shouldShowSearch
        searchText={searchText}
        signout="Logout"
        joinAsSeller="For Business"
        signup="Sign Up"
      />
      <div className="dashBoardContent">
        <div className="dashboardHeader">
          <FoodIcon foodIcons={foodIcons} />
        </div>
        <div className="dashboardBody">
          <div className="dashboardFilter"><RestaurantsFilter/></div>
          <div className="dashboardFoodCard">          
            <FoodCard searchText={searchText} filters={filters} restaurantList={restaurantLists} />            
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

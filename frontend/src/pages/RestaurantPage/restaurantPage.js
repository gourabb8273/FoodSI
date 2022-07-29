import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PhoneOutlined } from "@ant-design/icons";

import "./restaurantPage.css";
import { Button, Tabs } from "antd";
import Menu from "../../components/Menu/menu"

const { TabPane } = Tabs;
/**
 * @author
 * @function RestaurantPage
 **/

function RestaurantPage(props) {
  const dispatch = useDispatch();
  const selectedRestaurant = useSelector(
    (state) => state.selectedRestaurant.activeRestaurant
  );  

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="restaurantPage">
      <div className="restaurantHeader">
        <div className="headerProfile">
          <img
            className="headerProfilePic"
            src={selectedRestaurant.vendorProfileImage}
            alt="no profile"
          ></img>
          <h5>{selectedRestaurant.vendorName}</h5>
          <div className="profilePic">
            <div className="photoIcon">
              <PhoneOutlined />
            </div>
            <h6> +91 {selectedRestaurant.phoneNumber}</h6>
          </div>
          <h6>{selectedRestaurant.businessAddress}</h6>
        </div>
        <div className="restaurantDetailsHeader">
          <h1>{selectedRestaurant.businessName}</h1>
          <h4>{selectedRestaurant.subCategoryId}</h4>
          <div className="restaurantRatingSection">
            <h5>
              {selectedRestaurant.vendorRating}{" "}
              <span className="ratingIcon">* </span>10 Reviews
            </h5>
            <Button>
              <span>Add Review</span>
            </Button>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="restaurantImageHeader">
          <div className="restaurantCoverImage">
            <img
              src={selectedRestaurant.businessCoverImage}
              alt="businessCoverImage"
            />
          </div>
        </div>
      </div>
      <div className="restaurantPageBody">
        <Tabs className="menuTab" defaultActiveKey="1" onChange={onChange}>
          <TabPane className="menuTabPane" tab="Menu" key="1">
            <Menu product={selectedRestaurant.product}/>
          </TabPane>
          <TabPane tab="Review" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Photos" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default RestaurantPage;

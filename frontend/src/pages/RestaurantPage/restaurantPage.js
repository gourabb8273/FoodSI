import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PhoneOutlined } from "@ant-design/icons";
import ImageGallery from 'react-image-gallery';

import "./restaurantPage.css";
import { Button, Tabs } from "antd";
import Menu from "../../components/Menu/menu";
import ReviewSection from "../../components/ReviewSection/reviewSection"
// import from "react-image-gallery/styles/css/image-gallery.css"
import "react-image-gallery/styles/css/image-gallery.css"

const { TabPane } = Tabs;
/**
 * @author
 * @function RestaurantPage
 **/

function RestaurantPage(props) {
    const images = [
        {
          original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmymuNkU0lPwQWdiRlw1AIYV09GUL-VsPp4A&usqp=CAU',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
          originalWidth: "20",
        },
        {
          original: 'https://www.cookingcarnival.com/wp-content/uploads/2015/05/Rava-Dosa-2.jpg',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
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
       
          <TabPane tab="Photos" key="3">  
          <div className="imageGallery">
            <ImageGallery sizes={20} originalWidth={"200"} items={images} />
            </div>
          </TabPane>
          <TabPane tab="Review" key="2">
            <ReviewSection reviews={selectedRestaurant.reviews}/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default RestaurantPage;

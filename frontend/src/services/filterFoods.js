/**
 * Filter food item on given search item
 */
function filterFoods(restaurantList, filters, searchText) {
  // let filteredRestaurant = restaurantList;
  let filteredRestaurantSearched = [];
  let seachedRestaurant = restaurantList;

  //searching
  if (!!searchText) {
    let foodItem;
    let filteredProduct;
    restaurantList.filter((item) => {
      foodItem = item.product.filter((products) =>
        products.productName.toLowerCase().includes(searchText.toLowerCase()) 
        // || 
        // products.businessName.toLowerCase().includes(searchText.toLowerCase())
        //  || 
        // products.subCategoryId.toLowerCase().includes(searchText.toLowerCase())
      );
      if (!!foodItem.length) {
        filteredRestaurantSearched.push({
          ...item,
          businessCoverImage: foodItem[0].productPhoto
            ? foodItem[0].productPhoto
            : item.businessCoverImage,
          isVeg: foodItem[0].isVeg,
          productPrice: foodItem[0].productPrice,
        });
      }
    });
    seachedRestaurant = filteredRestaurantSearched;
  }

  //rating filter
  const { dietary, ratingRange, distanceRange, priceRange } = filters;
  if (ratingRange && ratingRange.length) {
    seachedRestaurant = seachedRestaurant.filter(
      (item) =>
        item.vendorRating > ratingRange[0] && item.vendorRating < ratingRange[1]
    );
  }
  return seachedRestaurant;
}

export default filterFoods;

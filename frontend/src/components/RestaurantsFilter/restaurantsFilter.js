import React, { useEffect, useState } from "react";
import { Button, Slider, Switch, Col, InputNumber, Row } from "antd";
import "antd/dist/antd.css";
import type { SliderMarks } from "antd/es/slider";
import { useDispatch, useSelector } from "react-redux";

import "./restaurantsFilter.css";
import { addFilter } from "../../store/slices/filterSlice";
import distanceMarks from "../../Constant/distanceRange";
import ratingsMarks from "../../Constant/ratingsMarks";
import dietaryCategories from "../../Constant/dietaryCategories";
/**
 * @author
 * @function RestaurantsFilter
 **/

const filterInitialValues = {
  dietary: dietaryCategories,
  ratingRange: [1, 5],
  distanceRange: [1, 10],
  priceRange: { min: 1, max: 100 },
};

function RestaurantsFilter(props) {
  const [inputValue, setInputValue] = useState(1);
  const [filtervalues, setFilterValues] = useState(filterInitialValues);
  const [isClearEnable, setClearEnable] = useState(false);
  const dispatch = useDispatch();
  const restaurantLists = useSelector((state) => state.filter.filterValues);

  function handleClearAll() {
    setFilterValues(filterInitialValues);
    dispatch(addFilter(filterInitialValues));
    setClearEnable(false);
  }

  function handleRatingChange(newValue: number) {
    setInputValue(newValue);
    setFilterValues({ ...filtervalues, ratingRange: newValue });
    setClearEnable(true);
  }
  function handleDistanceChange(newValue: number) {
    setInputValue(newValue);
    setFilterValues({ ...filtervalues, distanceRange: newValue });
    setClearEnable(true);
  }

  const handleMinPriceChange = (newValue: number) => {
    setFilterValues({
      ...filtervalues,
      priceRange: { ...filtervalues.priceRange, min: newValue },
    });
    setClearEnable(true);
  };
  const handleMaxPriceChange = (newValue: number) => {
    setFilterValues({
      ...filtervalues,
      priceRange: { ...filtervalues.priceRange, max: newValue },
    });
    setClearEnable(true);
  };

  useEffect(() => {
    dispatch(addFilter(filtervalues));
  }, [filtervalues]);

  function handleDietaryStateChange(dType) {    
    const updatedDietary = [];
    filtervalues.dietary.forEach((dietary) => {
      if (dietary.title == dType.title) {
        updatedDietary.push({ title: dType.title, isActive: !dType.isActive });
      } else updatedDietary.push(dietary);
    });
    setFilterValues({
      ...filtervalues,
      dietary: updatedDietary,
    });
    setClearEnable(true);
  }

  function handleResetDietaryType() {    
    setFilterValues({ ...filtervalues, dietary: filterInitialValues.dietary });
    if (      
      filterInitialValues.distanceRange == filtervalues.distanceRange &&
      filtervalues.priceRange == filterInitialValues.priceRange &&
      filtervalues.ratingRange == filterInitialValues.ratingRange
    ) {
      setClearEnable(false);
    }
  }

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h5>Filters</h5>
        <Button disabled={!isClearEnable} onClick={handleClearAll}>
          Clear All
        </Button>
      </div>
      <div className="dietary-section">
        <div className="dietary-header">
          <h6>Dietary</h6>
          <Button onClick={handleResetDietaryType}>Reset All</Button>
        </div>
        {filtervalues.dietary.length &&
          filtervalues.dietary.map((dType) => {
            return (
              <>
                <Button
                  id={dType.title}
                  className={dType.isActive ? "dTypeActive" : "dType"}
                  onClick={() => handleDietaryStateChange(dType)}
                >
                  {dType.title}
                </Button>
              </>
            );
          })}
      </div>
      <div className="price-section">
        <h6>Price ($)</h6>
        <Row className="price-section-row">
          <Col className="price-section-col" span={12}>
            <h7>Min</h7>
            <Slider
              min={1}
              max={100}
              onChange={handleMinPriceChange}
              value={filtervalues.priceRange.min}
            />
          </Col>
          <Col span={4} className="price-section-input">
            <InputNumber
              min={1}
              max={100}
              style={{ margin: "0 16px" }}
              value={filtervalues.priceRange.min}
              onChange={handleMinPriceChange}
            />
          </Col>
          <Col span={12} className="price-section-col">
            <h7>Max</h7>
            <Slider
              min={1}
              max={100}
              onChange={handleMaxPriceChange}
              value={
                typeof filtervalues.priceRange.max === "number"
                  ? filtervalues.priceRange.max
                  : 0
              }
            />
          </Col>
          <Col span={4} className="price-section-input">
            <InputNumber
              min={1}
              max={100}
              style={{ margin: "0 16px" }}
              value={filtervalues.priceRange.max}
              onChange={handleMaxPriceChange}
            />
          </Col>
        </Row>
      </div>
      <div className="rating-section">
        <h6>Rating</h6>
        <Slider
          range
          marks={ratingsMarks}
          min={1}
          max={5}
          value={filtervalues.ratingRange}
          onChange={handleRatingChange}
        />
      </div>
      <div className="distance-section">
        <h6>Distance</h6>
        <Slider
          range
          marks={distanceMarks}
          min={1}
          max={10}
          value={filtervalues.distanceRange}
          onChange={handleDistanceChange}
        />
      </div>
    </div>
  );
}

export default RestaurantsFilter;

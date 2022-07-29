import React, {useState} from "react";
import { Card,Input } from "antd";

import {SearchOutlined} from  "@ant-design/icons";

import './menu.css';
import NoFoodFound from "../NoFoodFound/noFoodFound";
import filterMenu from "../../services/filterMenu";
import MenuCard from "../MenuCard/menuCard";

/**
 * @author
 * @function Menu
 **/

function Menu({product}) {
    const [searchText, setSearchText] = useState('');   
    
    function handleChangeSearch(e) {
        const searchValue = e.target.value;
        setSearchText(searchValue);
      }
    // debugger
    product = filterMenu(product, searchText);

  return (
    <div className="menu-section">
        <div className="menuHeader">
      <h4>Today's Exclusive Dishes</h4>
      <Input
              onChange={handleChangeSearch}
              value={searchText}
              className="searchMenu"
              placeholder="Search any food..."
            ></Input>
            <SearchOutlined className="icon-search-menu" />
            </div>
            <MenuCard product={product} />
          
    </div>
  );
}

export default Menu;

import React from 'react'

import  "./noFoodFound.css";
import {SearchOutlined} from "@ant-design/icons";

function NoFoodFound(props){
  return(    
    <div className="result-not__found">
    <SearchOutlined className='result-not__found--icon'/>
    <h2>No Result Found</h2>
    <div className="result-not_found--body">      
      <h5>
      We couldn’t find the searched item in the nearby area. We’ll send the request to our partner chefs to have this item available very soon.</h5>
    </div>
    </div>    
   )
 }

 export default NoFoodFound;
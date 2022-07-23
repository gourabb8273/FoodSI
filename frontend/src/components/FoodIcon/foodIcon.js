import React from 'react'

import "./foodIcon.css"

function FoodIcon ({foodIcons}) {
  return(
    <div className='foodIconSection'>
    {foodIcons ? foodIcons.map(({imageHref,imageTitle})=>{
        return (
            <div className='foodIcon'>
            <img className="foodIconImage" src={imageHref} alt="No icon found"/>
            <p className='foodIconTite'>{imageTitle}</p>
            </div>
        )
    }):null}
    </div>
   )

 }

 export default FoodIcon;
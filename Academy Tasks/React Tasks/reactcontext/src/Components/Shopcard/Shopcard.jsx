import React from 'react'
import "./Shopcard.css"

const Shopcard = ({productName,productPrice,productDesrc,image}) => {
    return (
        <div className='cards'>
            <h1>Products</h1>
            <img src={image} alt='image' />
            <h3>{productName}</h3>
            <h3>{productPrice}</h3>
            <p>{productDesrc}</p>
        </div>
    )
}

export default Shopcard
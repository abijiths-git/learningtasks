import React, { useContext } from 'react'
import { Passingcontext } from '../../App'
import Shopcard from '../../Components/Shopcard/Shopcard';

const All = () => {
  const {allProducts} = useContext(Passingcontext)

  return (
      <div className="cardsouter">
        {
          allProducts.map((items) => (
            <Shopcard {...items} />
          ))}
      </div>
  )
}

export default All
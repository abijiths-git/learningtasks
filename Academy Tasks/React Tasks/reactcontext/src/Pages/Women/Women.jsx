import React, { useContext } from 'react'
import { Passingcontext } from '../../App'
import Shopcard from '../../Components/Shopcard/Shopcard'

const Women = () => {
  const {allProducts} = useContext(Passingcontext)
  const womenProducts = allProducts.filter((item)=>item.prodCat === "Womens"
  )

  return (
    <div className="cardsouter">
      {
        womenProducts.map((items) => (
          <Shopcard {...items} />
        ))}
    </div>
  )
}

export default Women
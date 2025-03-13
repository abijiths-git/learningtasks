import React, { useContext } from 'react'
import { Passingcontext } from '../../App'
import Shopcard from '../../Components/Shopcard/Shopcard'

const Men = () => {
  const {allProducts} = useContext(Passingcontext)
  const menProducts = allProducts.filter((item)=>item.prodCat === "Mens"
  )

  return (
    <div className="cardsouter">
      {
        menProducts.map((items) => (
          <Shopcard {...items} />
        ))}
    </div>
  )
}

export default Men
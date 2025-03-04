import React from 'react'
import "./index.css"

function Plancard({pack,packquality,price,quality,res,aud,audio,devices,watchdev,dowdev}) {
  return (
    <div className='planbox'>
      <div className='plandev'>
        <h6 className='devh1'>{pack}</h6>
        <h4 className='devh2'>{packquality}</h4>
      </div>

      <div className='plandetail'>
        <div>
          <h6 className='devicehd'>Monthly price</h6>
          <h4>{price}</h4>
        </div>
        <div>
          <h6>Video and sound quality</h6>
          <h4>{quality}</h4>
        </div>
        <div>
          <h6>Resolution</h6>
          <h4>{res}</h4>
        </div>
        <div className='audbox'>
          <h6>{aud}</h6>
          <h4>{audio}</h4>
        </div>
        <div>
          <h6>Supported devices</h6>
          <h4>{devices}</h4>
        </div>
        <div>
          <h6>Devices your household can watch at the same time</h6>
          <h4>{watchdev}</h4>
        </div>
        <div className='lastdiv'>
          <h6>Download devices</h6>
          <h4>{dowdev}</h4>
        </div>
      </div>
    </div>
);
}
export default Plancard;


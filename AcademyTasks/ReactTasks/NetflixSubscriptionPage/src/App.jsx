import React from 'react';
import "./App.css";
import Navbar from './Navbar';
import Plancard from './Plancard';
import Footerbar from './Footerbar';

const packages = [
  {
    packName: "Mobile",
    packQuality: "480p",
    prices: "₹149",
    quality: "Fair",
    res: "480p",
    device: "Mobile phone, tablet",
    watchDev: "1",
    downloadDev: "1"
  },
  {
    packName: "Basic",
    packQuality: "720p",
    prices: "₹199",
    quality: "Good",
    res: "720p (HD)",
    device: "TV, computer, mobile phone, tablet",
    watchDev: "1",
    downloadDev: "1"
  },
  {
    packName: "Standard",
    packQuality: "1080p",
    prices: "₹499",
    quality: "Great",
    res: "1080p (Full HD)",
    device: "TV, computer, mobile phone, tablet",
    watchDev: "2",
    downloadDev: "2"
  },
  {
    packName: "Premium",
    packQuality: "4K + HDR",
    prices: "₹649",
    quality: "Best",
    res: "4K (Ultra HD) + HDR",
    aud: "Spatial audio (immersive sound)",
    audio: "Included",
    device: "TV, computer, mobile phone, tablet",
    watchDev: "4",
    downloadDev: "6"
  }
];



function App() {
  return (
    <div className='netflixpage'>
      <div className='header'>
        <Navbar />
      </div>

      <div style={{padding: "10px 20px"}}>
        <h6>STEP 1 OF 4</h6>
        <h2 style={{ fontSize: "32px", fontWeight: "bold"}}>Choose the plan that’s right for you</h2>
      </div>

      <div className='pagebody'>
        {
          packages.map(({ packName, packQuality, prices, quality, res, aud, audio, device, watchDev, downloadDev }) => (
            <Plancard pack={packName} packquality={packQuality} price={prices} quality={quality} res={res} aud={aud} audio={audio} devices={device} watchdev={watchDev} dowdev={downloadDev} />
          ))
        }
      </div>
      <div>
        <Footerbar />
      </div>
    </div>

  );
};

export default App
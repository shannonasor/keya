import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './App.css';

import Landing from './Landing/Landing';
import DaysTimer from './DaysTimer/DaysTimer';
import AdviceCard from './AdviceCard/AdviceCard';


import { Desktop } from "./responsive-components/desktop/component";
import { Laptop } from "./responsive-components/laptop/components";
import BigScreen from "./responsive-components/big-screen/component";
import { Mobile } from "./responsive-components/mobile/components";
import { TabletMobile } from "./responsive-components/tablet-mobile/components";

function App() {

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  if (isBigScreen) {
    return <BigScreen />
    } else if (isDesktop) {
        return  <Desktop />
      } else if (isLaptop) {
          return <Laptop/>
        } else if (isTabletDevice) {
            return <TabletMobile />
          } else if (isMobileDevice) {
              return < Mobile />
            } else {
                return < Mobile />
          }
//   return (
//     <div>
//       <h1>React Responsive - a guide</h1>     

//       {isBigScreen && <BigScreen />} 
//       {isLaptop && <Laptop />}
//       {isDesktop && <Desktop />}
//       {isTabletDevice && <TabletMobile />}
//       {isMobileDevice && <Mobile />}
//           {/* {isMobileDevice && <Mobile />}
//   {isTabletDevice && <>
//   <TabletMobile />
//   {isDesktop && <Desktop />}
//   {isLaptop && <Laptop />}
//   {isBigScreen && <BigScreen />}
// </>} */}
//     </div>
//     // <Router>
//     //   <div className="container">
//     //     <div className="main-content">   
//     //       <Routes>
//     //         <Route path="/" element={<Landing/>}></Route>
//     //         <Route path="/giveshakeyaadvice" element={<AdviceCard/>}></Route>
//     //       </Routes>
//     //     </div>
        
//     //     <div className="main-content">
//     //       <DaysTimer />
//     //     </div>

//     //     <div className="buttons">
//     //       <Link className="both-buttons button1" to="/giveshakeyaadvice">Send Advice And Wishes To Graduate</Link>
//     //       <Link className="both-buttons button2" to="/giveshakeyaadvice">Attend Virtual Graduation Party</Link>
//     //     </div>
        
//     //   </div>
//     // </Router>
//   );
}

export default App;

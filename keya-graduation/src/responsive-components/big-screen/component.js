import React from 'react'

import logo from '../../img/2022icon.png';
import './styles.css'






function BigScreen() {
    return (
        <div className="Landing-big-screen" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'center',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
              <header className="Landing-header-big-screen">
                <div className="Landing-header-div-big-screen">
                   <h1 className="HeaderText Main-name-big-screen">Shakeya Bell</h1>
                   <img src={logo} className="Landing-logo-big-screen" alt="logo" />
                   <h1 className="HeaderText Main-graduate-big-screen">Graduate</h1>
                </div>
          {/*2022 Icon attribute*/}
          {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}
              </header>

      </div>
    )
}

export default BigScreen;
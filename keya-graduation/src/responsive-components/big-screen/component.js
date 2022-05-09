import React from 'react'

import logo from '../../img/2022icon.png';
import './styles.css'






function BigScreen() {
    return (
        // <div className="big-screen">
        //     <p>Whoops! I'm in big screen mode.</p>
        //     <p>This is the base of the pyramid</p>
        // </div>

        <div className="Landing" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',}} >

<header className="Landing-header">
          
          <div className="Landing-header-divs middle">
            <h1 className="Main-name Main-text">
              Shakeya Bell
            </h1>

            <img src={logo} className="Landing-logo" alt="logo" />

            <h1 className="Main-text Main-graduate">
              Graduate
            </h1>
          </div>

          {/* <div className=" Landing-header-divs right">
            <div>
              
              <figure>
                <img src={Keya2} className="img-fill" alt="keya1"/>
                <figcaption>Caption One</figcaption>
              </figure>

              <figure>
                <img src={Keya1} className="img-fill" alt="keya1"/>
                <figcaption>Caption One</figcaption>
              </figure>
            </div>

            <div>

              <figure>
                <img src={Keya3} className="img-fill" alt="keya1"/>
                <figcaption>Caption One</figcaption>
              </figure>

              <figure>
                <img src={Keya} className="img-fill" alt="keya1"/>
                <figcaption>Caption One</figcaption>
              </figure>
            </div>
          </div> */}
          
          {/*2022 Icon attribute*/}
          {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}
        </header>

      </div>
    )
}

export default BigScreen;
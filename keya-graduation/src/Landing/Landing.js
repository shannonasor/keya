
import logo from '../img/2022icon.png';
import Keya from '../img/keya.png';
import Keya1 from '../img/keya1.png';
import Keya2 from '../img/keya2.png';
import Keya3 from '../img/keya3.png';
import '../assets/landing.css';



function Landing () {
    return (
    <div className="Landing">
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

      <div className=" Landing-header-divs right">
      <div>
      <figure>
      <img src={Keya2} class="img-fill" alt="keya1"/>
      <figcaption>Caption One</figcaption>
      </figure>
      <figure>
      <img src={Keya1} class="img-fill" alt="keya1"/>
      <figcaption>Caption One</figcaption>
      </figure>
      </div>
      <div>
      <figure>
      <img src={Keya3} class="img-fill" alt="keya1"/>
      <figcaption>Caption One</figcaption>
      </figure>
      <figure>
      <img src={Keya} class="img-fill" alt="keya1"/>
      <figcaption>Caption One</figcaption>
      </figure>
      </div>
      </div>
      
      {/*2022 Icon attribute*/}
      {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}
    </header>

    
  </div>
    )

}

export default Landing
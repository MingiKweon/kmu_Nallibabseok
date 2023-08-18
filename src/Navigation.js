import Hamburger from './Hamburger';
import navstyles from "./Navigation.module.css";
const Navigation = () => {
    return (

    <div className = {navstyles.Navigation}>
        <div className="Hamburger">
          <Hamburger/>
        </div>

        <div className="Navlogo">
            <img src= "img/logo.png" alt="logo" width = '200px'/>
        </div>

        <div className='Login'>
            <img src= "img/login.png" alt="login" width = '50px'/>
        </div>
    </div>
    );
};

export default Navigation;

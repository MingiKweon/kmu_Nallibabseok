import './Hamburger.css';

const Hamburger = () => {
    return (
        <div>

        <input type="checkbox" id="check_box" />
            <label for="check_box">
                <span></span>
                <span></span>
                <span></span>
            </label>
        
        <div id="side_menu">
            <ul>
                <li><a href="#">menu1</a></li>
                <li><a href="#">menu2</a></li>
                <li><a href="#">menu3</a></li>
            </ul>
        </div>  

        </div>
    );
};

export default Hamburger;
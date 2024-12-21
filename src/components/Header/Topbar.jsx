import globe from '../../assets/icons/Geography.png';
import arrow from '../../assets/icons/ExpandArrow.png';
import cart from '../../assets/icons/Cart.png';
import notification from '../../assets/icons/Notification.png';

import './Topbar.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <button className="language-button">
                <img src={globe} alt="globe icon"/>
                <h1>English</h1>
                <img src={arrow} alt="drop down icon"/>
            </button>
            <div className="action-links">
                <a href="#" className="icon-link">
                    <img src={cart} alt="cart icon"/>
                </a>
                <a href="#" className="icon-link">
                    <img src={notification} alt="notification icon"/>
                </a>
                <div className="divider"></div>
                <a href="#" className="text-link">
                    <h1>Login</h1>
                </a>
                <a href="#" className="text-link">
                    <h1>Register</h1>
                </a>
            </div>
        </div>
    );
}

export default Topbar;
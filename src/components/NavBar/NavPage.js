import React from 'react';
import { Link } from 'react-router-dom';

class NavPage extends React.Component {

    render() {
        let tmp = "https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg";
        return (
            <div className="dashboard">
                <nav className="menu" tabIndex="0">
                    <div className="smartphone-menu-trigger"></div>
                    <header className="avatar">
                        <img src={this.tmp} />
                        <h2>Ware-House</h2>
                    </header>
                    <ul>
                        <li tabindex="0" className="icon-dashboard"><Link style={{ color: "white", textDecoration: "none" }} to='/products'><span>Products</span></Link></li>
                        <li tabindex="0" className="icon-settings"><Link style={{ color: "white", textDecoration: "none" }} to='/track'><span>Tracker</span></Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavPage;
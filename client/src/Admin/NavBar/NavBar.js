import React from 'react';
import './NavBar.css'; 
import { Redirect} from "react-router-dom";
import AuthFunctions from '../../AuthFunctions';
import { Link } from 'react-router-dom';
//import axios from 'axios';

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            logout: false, 
        }
        this.Auth = new AuthFunctions();
    }


    /* ...NAV BAR functions... */
    addTempCar = () => {
        console.log("newpage")
        /* var config = {
            headers: {'Authorization': 'Bearer ' + this.Auth.getToken(), 'Content-Type': 'application/json' }
        }; 
        
        if (localStorage.getItem('car_id') === null) {
            axios.post('/api/cars/addCar_temp', "", config).then((res)=>{
                    console.log("temp car added to db and local: ", res.data);
                    localStorage.setItem('car_id', res.data._id);
            });
        } else {
            console.log("car_id already set"); 
        } */
    }

    handleLogout = () => {
        this.Auth.logout();
        this.setState({logout: true})
    }
    resetCarId = () => {
        localStorage.removeItem('car_id');
    }
    /* ...NAV BAR functions... */


    render(){
        if(this.state.logout){
            return <Redirect to='/login'/>
        }
        return (
            <React.Fragment> 
                <div id="header"> 
                    <div id="navBar">
                        <li className="navBarA"><Link to="/newPage"><div className="admNavBtn">Page1</div></Link></li>
                        <li className="navBarA"><Link to="/newPage"><div className="admNavBtn">Page2</div></Link></li>
                        <li className="navBarA"><Link to="/newPage"><div className="admNavBtn">Page3</div></Link></li> 
                        <li className="navBarA"><div className="admNavBtn" onClick={this.handleLogout}><a target="_blank">Log Out</a></div></li>
                    </div>

                    <div id="navBarMobile">
                        <div id="nav-icon1">
                            <span className="hmbSpanA"></span>
                            <span className="hmbSpanA"></span>
                            <span className="hmbSpanA"></span> 
                        </div>
                        <div className="side-menu" id="side-menu">
                            <li><Link to="/" onClick={this.toggleMobileMenu}>Home</Link></li> 
                            <li><Link to="/about" onClick={this.toggleMobileMenu}>About</Link></li>
                            <li><Link to="/contact" onClick={this.toggleMobileMenu}>Contact</Link></li>
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
};

export default NavBar;

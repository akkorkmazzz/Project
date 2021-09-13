import React, {useState} from 'react';
import Flag_usa from '../img/flag_usa.png'
import SideBar from './SideBar';

function Navbar() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="navbar-container">
            <div className="sidebar-container">
                <SideBar isOpen={isOpen} />
            </div>
            <div className="navbar-cont">
                <div className="navbar-cont-main">
                    <div className="icon-container1">
                        <div
                            onClick={() => setIsOpen(!isOpen)} 
                            className="navbar-icon7"
                            >
                            {
                                isOpen ? 
                                <i class="fas fa-outdent"></i>
                                :
                                <i class="fas fa-align-justify"></i>
                            }
                        </div>
                    </div>
                    <div className="icon-container2">
                        <div className="navbar-icon6">
                            <img src={Flag_usa} alt="" />
                        </div>
                        <div className="navbar-icon5">
                            <i class="fas fa-bug"></i>
                        </div>
                        <div className="navbar-icon4">
                            <i class="fas fa-expand"></i>
                        </div>
                        <div className="navbar-icon3">
                            <i class="far fa-bell"></i>
                        </div>
                        <div className="navbar-icon2">
                            <i class="fas fa-info"></i>
                        </div>
                        <div className="navbar-photo">
                            <h4 className="navbar-txt">A</h4>
                        </div>
                        <div className="navbar-text">
                            <h5>Adem Ljaic</h5>
                        </div>
                        <div className="navbar-icon1">
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Navbar;

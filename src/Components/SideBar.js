import React from 'react';

function SideBar(props) {


    return (
        <div className={props.isOpen ? "sidebar-main show-sidebar" : "sidebar-main" }>
            <div className="sidebar-main-cont">
                <div className="side-icons-one">
                    <div className="side-icon1">
                        <i class="fas fa-atom"></i>
                    </div>
                    <div className="side-icon2">
                        <i class="fas fa-th-large"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="far fa-calendar-alt"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="far fa-envelope"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="fas fa-users"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="fas fa-expand"></i>
                    </div> 
                </div>
                <div className="side-icons-two">   
                    <div className="side-icon3">
                        <i class="fas fa-underline"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="fas fa-cube"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="far fa-circle"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="fas fa-table"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="fas fa-chart-bar"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="far fa-square"></i>
                    </div>
                    <div className="side-icon3">
                        <i class="fab fa-hubspot"></i>
                    </div>
                </div>
                
            </div>  
        </div>
    )
}

export default SideBar;

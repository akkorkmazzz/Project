import React, {useState} from 'react';
import Boxes from './Boxes';
import Collapsible from './Collapsible';

function Contents() {

    const [isOpen, setIsOpen] = useState(false);
    const [isClick1, setIsClick1] = useState(true);
    const [isClick2, setIsClick2] = useState(false);
    const [isClick3, setIsClick3] = useState(false);

    return (
        <div className="contents">
            <div className="main-content">
                <div className="main-title">
                    <h3>Cardiology, A, Hospital-Policlinc</h3>
                    <p>Marketing / Visit Mix / Cardiology, A, Hospital-Policlinc</p>
                </div>
                <div className="main-buttons">
                    <button className="main-button1">
                        <span>back to page</span>
                    </button>
                    <button className="main-button2">
                        <i class="fas fa-bullhorn"></i>
                    </button>
                </div>
            </div>
            <div className="box-content">
                <div className="search-content">
                    <div className="left-icons">
                        <div className="left-icons-cont">
                            <input type="text" name="search" placeholder="search" />
                            <i class="fas fa-search"></i>
                        </div>                    
                    </div>
                    <div className="right-icons">
                        <button className="button1">
                            <span>send to approval</span>
                        </button>
                        <button className="button2">
                            <span>pre-plan</span>
                        </button>
                        <button 
                            className={isClick1 ? "button3 show-btn3" : "button3"}
                            onClick={() => setIsClick1(!isClick1)}
                            >
                            <i class="fas fa-expand-arrows-alt"></i>
                        </button>
                        <button 
                            className={isClick2 ? "button4 show-btn4" : "button4"}
                            onClick={() => setIsClick2(!isClick2)}
                            >
                            <i class="fas fa-external-link-alt"></i>
                        </button>
                        <button 
                            className={isClick3 ? "button5 show-btn5" : "button5"}
                            onClick={() => setIsClick3(!isClick3)}
                            >
                            <i class="fas fa-gift"></i>
                        </button>
                        <button 
                            className={isOpen ? "button6 show-btn6" : "button6"}
                            onClick={() => setIsOpen(!isOpen)}
                            >
                            <span>filtre</span>
                            <i class="fas fa-sort"></i>
                        </button>
                    </div>
                </div>
                <div className="main-collapsible">
                    <Collapsible isOpen={isOpen} />
                </div>
                <div className="main-boxes">
                    <Boxes text='Q1' date1='JAN' date2='FEB' date3='MAR' />
                    <Boxes text='Q2' date1='APR' date2='MAY' date3='JUN' />
                    <Boxes text='Q3' date1='JUL' date2='AUG' date3='SEP' />
                    <Boxes text='Q4' date1='OCT' date2='NOV' date3='DEC' />
                </div>
            </div>
        </div>
    )
}

export default Contents;

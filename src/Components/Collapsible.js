import React from 'react';

function Collapsible(props) {
    
    return (
        <div>
            <div className={props.isOpen ? "collapsible-parent show" : "collapsible-parent "}>
                    <div className="collapsible">
                        <div className="collapsible-cont1">
                            <div className="select1">
                                <div className="select1-cont">
                                    <span>product</span>
                                    <select class="selectpicker1">
                                        <option>select</option>
                                        <option>item1</option>
                                        <option>item2</option>
                                        <option>item3</option>
                                        <option>item4</option>
                                        <option>item5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="select1">
                                <div className="select1-cont">
                                    <span>indication</span>
                                    <select class="selectpicker1">
                                        <option>select</option>
                                        <option>item1</option>
                                        <option>item2</option>
                                        <option>item3</option>
                                        <option>item4</option>
                                        <option>item5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="select1">
                                <div className="select1-cont">
                                    <span>profile</span>
                                    <select class="selectpicker1">
                                        <option>select</option>
                                        <option>item1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="select1">
                                <div className="select1-cont">
                                    <span>promo subject</span>
                                    <select class="selectpicker1">
                                        <option>select</option>
                                        <option>item1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="select1">
                                <div className="select1-cont">
                                    <span>promo material</span>
                                    <select class="selectpicker1">
                                        <option>select</option>
                                        <option>item1</option>
                                    </select>
                                </div> 
                            </div>
                        </div>
                        <div className="collapsible-cont2">
                            <div className="col-cont2">
                                <button className="col-btn1">
                                    <span>apply</span>
                                </button>
                                <button className="col-btn2">
                                    cancel
                                </button>
                                <button className="col-btn3">
                                    <i class="fas fa-paint-brush"></i>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
    )
}

export default Collapsible;

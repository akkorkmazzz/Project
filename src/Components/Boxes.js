import React, {useState} from 'react';

function Boxes({text, date1, date2, date3}) {

    const [color, setColor] = useState(null);

    const changeColor1 = () => {
        console.log(color);
        if(color === 'one'){
            setColor(null);
        }else{
            setColor('one');
        }
    };

    const changeColor2 = () => {
        console.log(color);
        if(color === 'two'){
            setColor(null);
        }else{
            setColor('two');
        }
    };

    const changeColor3 = () => {
        console.log(color);
        if(color === 'three'){
            setColor(null);
        }else{
            setColor('three');
        }
    };

    const changeColor4 = () => {
        console.log(color);
        if(color === 'four'){
            setColor(null);
        }else{
            setColor('four');
        }
    };

    const changeColor5 = () => {
        console.log(color);
        if(color === 'five'){
            setColor(null);
        }else{
            setColor('five');
        }
    };

    const changeColor6 = () => {
        console.log(color);
        if(color === 'six'){
            setColor(null);
        }else{
            setColor('six');
        }
    };

    return (
        <div className="main-boxes">
            <div className="first-boxes">
                <div className="box">
                    <div className="box-text">
                        <span className="box-number">{text}</span>
                        <span className="box-month">{date1}</span>
                    </div>
                    <div className="bxs1">
                        <div className="line">
                            <div 
                                className={color ==='one' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='one' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='one' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='one' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='two' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='two' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='two' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='two' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='three' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='three' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='three' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='three' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                    </div>
                    <div className="bxs2">
                        <div className="line">
                            <div 
                                className={color ==='four' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='four' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='four' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='four' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='five' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='five' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='five' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='five' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='six' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='six' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='six' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='six' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-text">
                        <span className="box-number">{text}</span>
                        <span className="box-month">{date2}</span>
                    </div>
                    <div className="bxs1">
                        <div className="line">
                            <div 
                                className={color ==='one' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='one' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='one' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='one' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='two' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='two' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='two' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='two' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='three' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='three' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='three' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='three' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                    </div>
                    <div className="bxs2">
                        <div className="line">
                            <div 
                                className={color ==='four' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='four' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='four' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='four' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='five' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='five' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='five' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='five' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='six' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='six' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='six' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='six' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-text">
                        <span className="box-number">{text}</span>
                        <span className="box-month">{date3}</span>
                    </div>
                    <div className="bxs1">
                        <div className="line">
                            <div 
                                className={color ==='one' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='one' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='one' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='one' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='two' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='two' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='two' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='two' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='three' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='three' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='three' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='three' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                    </div>
                    <div className="bxs2">
                        <div className="line">
                            <div 
                                className={color ==='four' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='four' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='four' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='four' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='five' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='five' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='five' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='five' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                        <div className="line">
                            <div 
                                className={color ==='six' ? "box1 bxchng" : "box1"}
                            ></div>
                            <div 
                                className={color ==='six' ? "box2 bxchng" : "box2"}
                            ></div>
                            <div 
                                className={color ==='six' ? "box3 bxchng" : "box3"}
                                ></div>
                            <div
                                className={color ==='six' ? "box4 bxchng" : "box4"}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="boxes-btns">
                    <div className="boxes-btns-cont1">
                        <div className="unique">
                            <button 
                                className={color ==='one' ? "unique-button chng" : "unique-button"}
                                onClick={changeColor1} 
                                >
                                <i class="fas fa-thumbtack"></i>
                            </button>
                        </div>
                        <div className="unique">
                            <button 
                                className={color ==='two' ? "unique-button chng" : "unique-button"}
                                onClick={changeColor2} 
                                >
                                <i class="fas fa-thumbtack"></i>
                            </button>
                        </div>
                        <div className="unique">
                            <button 
                                className={color ==='three' ? "unique-button chng" : "unique-button"}
                                onClick={changeColor3} 
                                >
                                <i class="fas fa-thumbtack"></i>
                            </button>
                        </div>
                    </div>
                    <div className="boxes-btns-cont2">
                        <div className="unique">
                            <button 
                                className={color ==='four' ? "unique-button chng" : "unique-button"}
                                onClick={changeColor4} 
                                >
                                <i class="fas fa-thumbtack"></i>
                            </button>
                        </div>
                        <div className="unique">
                            <button 
                                className={color ==='five' ? "unique-button chng" : "unique-button"}
                                onClick={changeColor5}
                                >
                                <i class="fas fa-thumbtack"></i>
                            </button>
                        </div>
                        <div className="unique">
                            <button 
                                className={color ==='six' ? "unique-button chng" : "unique-button"}
                                onClick={changeColor6}
                                >
                                <i class="fas fa-thumbtack"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boxes;

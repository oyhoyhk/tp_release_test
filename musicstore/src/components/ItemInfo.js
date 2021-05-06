import React from "react";
import "../style/item_info.css";
import { useState, useEffect } from "react";
import axios from 'axios';


import test_img from "../img/01.jpg"; // 테스트용

const ItemInfo = ( {queryID} ) => {
    const [itemCount, setItemCount] = useState(1);
    const [item, setItem] = useState({
        album : "",
        singer : "",
        price : "",
        supply : "",
        category : "",
        detail : ""
    });
    //console.log('parsing album ID : ' + queryID);
    
    // 아이템 데이터 가져오기
    const fetchItem = async() => {
        const res = await axios.post('http://localhost:3001/item_detail/', {
            queryID
        });
        setItem(res.data);
        console.log(item);
        
    };

    // 수량 state 조절하는 부분
    function onCountChange(event) {
        const {
            target: { value },
        } = event;
        setItemCount(value);
        //console.log(value + ', isNan = ' + isNaN(itemCount));
    }

    function increaseCount() {
        if (!isNaN(itemCount)) {
            setItemCount(Number(itemCount) + 1);
        } else {
            setItemCount(1);
        }
    }

    function decreaseCount() {
        if (!isNaN(itemCount)) {
            if (itemCount > 0) setItemCount(Number(itemCount) - 1);
            else setItemCount(0);
        } else {
            setItemCount(1);
        }
        if (itemCount < 0) setItemCount(0);
    }
    // 수량 state 조절하는 부분 끝
    
    useEffect(() => {  
        fetchItem();
    }, [])
    
    
    return (
        <div id="main">
            <div className="body_container">
                <div className="inner_body">
                <div id="item_header">
                        <div id="item_header_img">
                            <div id="item_header_category">
                                홈 &gt; 최신음악
                            </div>
                            <div id="item_img">
                                <img src={test_img} alt="test" />
                            </div>
                        </div>
                        <div id="item_header_info">
                            <div id="item_header_title">
                                {item.album}
                            </div>
                            <div id="item_header_price">{item.price} 원</div>
                            <div id="item_header_empty"></div>
                            <div id="item_count_container">
                                <button
                                    className="item_count_btn"
                                    onClick={decreaseCount}
                                >
                                    -
                                </button>
                                <input
                                    name="item_count"
                                    id="item_count"
                                    type="number"
                                    maxLength="3"
                                    value={itemCount}
                                    onChange={onCountChange}
                                />
                                <button
                                    className="item_count_btn"
                                    onClick={increaseCount}
                                >
                                    +
                                </button>
                            </div>
                            <div id="item_header_buy">
                                <button id="item_add_wishlist">장바구니</button>
                                <button id="item_buy">구매</button>
                            </div>
                        </div>
                    </div>
                    <div id="item_detail">
                        <h2>테스트를 위한 item 정보</h2>
                        앨범 이름 : {item.album} <br/>
                        가수 : {item.singer} <br/>
                        가격 : {item.price} <br/>
                        배급사 : {item.supply} <br/>
                        장르 : {item.category} <br/>
                        상세설명 : {item.detail} <br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemInfo;

import React, { useState } from 'react';

const ShowPayManetAndData = ({info}) => {
    const [phone, setPhone] = useState("");
    const takeTheNumber = ()=>{

        if(info.phoneNumber === phone.phone ){
            console.log("match")
        }
    }
    return (
        <div>
            <input onBlur={()=>setPhone()} type="number" name="phone" placeholder="Please provide your phone number"/>
        </div>
    );
};

export default ShowPayManetAndData;
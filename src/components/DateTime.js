import React, { useState } from 'react'

const DateTime = () => {
    var showdate = new Date();
    var todaydate = showdate.toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime]= useState(time);
    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime,1000);

    // let Date = new Date().Date;
  return (
    <>
    <h5>{todaydate}<br/>{ctime}</h5>
    </>
      
  )
}

export default DateTime

import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loading = () => {
  return (
    <div className='loading'>
        <ClimbingBoxLoader 
            color={"#38ada6"}
            size={30} />
    </div>
  )
}

export default Loading
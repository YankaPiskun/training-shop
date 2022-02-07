import React, { useState } from "react";

const Counter = function(){
    const [likes, setLikes] = useState(5)
    const [value, setValue] = useState('Hello')
    
    function like (){
        setLikes(likes + 1)
      }
      function dislike(){
        setLikes(likes - 1 )
    }

    return(
        <div>
            <button onClick={like}>+1</button>
            <button onClick={dislike}>-1</button>
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)} ></input>
        </div>
    )
}

export default Counter;

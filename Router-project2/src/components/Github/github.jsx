import React , {useEffect, useState} from "react";

function Github(){
    const[data, setData] =useState([])
    useEffect(()=>{
   fetch('https://api.github.com/users/hiteshchoudhary')
   .then(response => response.json())
   .then(data => {
    console.log(data)
    setData(data)
   })
    },[])
    return(
        <>
        <div className="bg-gray-600 text-white text-3xl p-4 text-center">Github followers: {data.followers}
        <img style={{marginLeft:"auto",marginRight:"auto"}} src={data.avatar_url} alt="git profile pic" width={300}/>
        </div>
        </>
    )
}
export default Github;
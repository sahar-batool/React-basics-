import React from 'react'
function Sum(){
//react memo compare props
//react memo skip child re-render
//child re-render when props change otherwise not
    const Sum = React.memo(({number})=>{
    function calculateSum(){

        let sum = 0;
        for(let i=1;i<=1000;i++){
            sum+=i;
        }
        return sum;
    }
    const total = calculateSum()
    console.log(total)

    return(
        <>
        <h1>This is our math library</h1>
        <h2>sum : {total}</h2>
        
        </>
    )
    })
    console.log(Sum)
}

export default Sum;
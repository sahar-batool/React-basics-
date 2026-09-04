import { useState } from "react";
import Food from './Food'

function List(){
const[listitems, setListitems] = useState(["apple","banana","fig"])

function Changehandler(){
    setListitems(["mango","orange",...listitems])
}

return(
    <>
    <h1>list of foods</h1>
    <button onClick={Changehandler}>Increment</button>
    <Food foods={listitems}></Food>
    </>
)

}

export default List;
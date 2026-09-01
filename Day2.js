//JSX -->look like html , and babel convert jsx into React.create(..)

//react elements//
const element = <h1 id="heading">Hello in the world of react</h1>;
const element2 = (<div>
    <h2>This is practise</h2>
    <p>hiii</p>
</div>)
console.log(element2)
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);
// root.render(element2)

//react component , actually function
//using{} we can write js expressions they return single value


// function App(name){
//     return(
//         <p> Hello {name} react components are actually functions.</p>
//     )
// }
// root.render(App("hello everyone"))

const age = 15;
const test = <h1>Hello {age>=15?"adult":"Genze"}</h1>
// root.render(test)


const courses = ["Html","Css","Javascript","python"]
const output = <ul>
    {courses.map(course=><li>{course}</li>)}
</ul>

// root.render(output)

//props take arguments inside in  the form of objects 
// function App(props){
//     return(
//         <h1>Hello everyone, my name is {props.name} and i am {props.age} and iam a begginer</h1>
//     )

// }
// const styling ={
//     backgroundColor:"orange",
//     color:"white"
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const para = <App name="sahar" age={18} style={{styling}}></App>
// root.render(para)
///lets make 3 functions like top header mid then footer
function Top(){
    return(
        <h1>Welcome to our election commision website pakistan.</h1>
    )
}

function Middle({user}){
    return(
         <>
         <p>Hi {user.name}.</p>
         <p>Your city is {user.city}</p>
         <p>{user.age>=18?"you are eligible for vote.":"you are not eligible for vote yet."}</p>
         </>
        
    )
}

function Footer({name}){
    return(
        <h3>Thanks for visiting our website {name}.</h3>
        
        
    )
}

function Final(){
    return(
        <>
        <Top></Top>
        <Middle user={{name:"sahar" ,age:18, city:"Gilgit"}}></Middle>
        <Footer name="sahar"></Footer>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Final></Final>)
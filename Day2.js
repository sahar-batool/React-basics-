//JSX -->look like html , and babel convert jsx into React.create(..)

//react elements//
const element = <h1 id="heading">Hello in the world of react</h1>;
const element2 = (<div>
    <h2>This is practise</h2>
    <p>hiii</p>
</div>)
console.log(element2)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
root.render(element2)

//react component , actually function
//using{} we can write js expressions they return single value


function App(name){
    return(
        <p> Hello {name} react components are actually functions.</p>
    )
}
root.render(App("hello everyone"))

const age = 15;
const test = <h1>Hello {age>=15?"adult":"Genze"}</h1>
root.render(test)


const courses = ["Html","Css","Javascript","python"]
const output = <ul>
    {courses.map(course=><li>{course}</li>)}
</ul>

root.render(output)
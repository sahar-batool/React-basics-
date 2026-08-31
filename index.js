// attribute = {
//     className:"element",
//     id:"first",
//     style:{fontSize:"30px",
//         color:"orange",
//         backgroundColor:"green"}
// }


/////////////Bascially react is the object of js///////////////////////////////
//this is custom react
// const React = {
//     createElement: function(tag,attribute,children){
//     const element = document.createElement(tag);
//     element.textContent = children
// for(const key in attribute){
//     if(key==='style'){
//         Object.assign(element.style,attribute.style)
//     }else{
//     element[key] = attribute[key]
// }}
// return element;
// }
// }

// const ReactDOM = {
//     render:function(child,parent){
//     parent.append(child)
// }
// }

const element1 =React.createElement('h1',{className:'element',id:'first',style:{fontSize:"30px",color:"orange",backgroundColor:"green"}},"Hello the world of programming with coder army")
const element2 =React.createElement('h2',{className:'element',id:'first',style:{fontSize:"20px",color:"black",backgroundColor:"green"}},"react with coder army")

const div = React.createElement('div',null,element1,element2,"Hello coders")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div)

// ReactDOM.render(element1,root)
// ReactDOM.render(element2,root)
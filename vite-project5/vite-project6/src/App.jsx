import { useState, memo } from 'react'

//memo rerender child when props change otherwise no rerender child
const Child = memo(function Child({ name }) {
  console.log("Child rendered");
  return <div>Hello, {name.age}</div>;
})

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <Child name={{name:"test",age:"17"}} />
    </div>
  );
}


export default App;

//if we pass a function as a prop memo stop working because function
//  and objects both compare with refrence and each render refrencer become new

function Parent() {
  const [count, setCount] = useState(0);

  // ⚠️ New function created every render
  const handleClick = () => console.log("clicked");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
}

const Children = memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

// in above cases where memo stop work useCallbacks() remember functions
//useCallback returns the same function reference between renders, as long as its dependencies haven't changed.


import { useState, useCallback, memo } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // ✅ Same function reference across renders
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []); // empty deps = never recreated

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
}

//useCallback with dependencies

//If your function depends on state or props, list them in the dependency
//  array — React will only recreate the function when those values change.

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = useCallback(() => {
    onSearch(query);
  }, [query, onSearch]); // recreated only when query or onSearch changes

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchButton onSearch={handleSearch} />
    </div>
  );
}

const SearchButton = memo(({ onSearch }) => {
  console.log("SearchButton rendered");
  return <button onClick={onSearch}>Search</button>;
});
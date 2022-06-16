import React from 'react'

export default function App() {

  const array = ['John', 'David', 'Harry', 'Tom', 'Brooke', 'Olivia', 'Mylei', 'Ahmed', 'Lina', 'Hasnain', 'Jaffery']

  const names = array.map(name => {
    return <li>{name}</li>
  })
  return (
    <div className="App">
      <h1>List of names:</h1>
      <ul>{names}</ul>
    </div>
  );
}


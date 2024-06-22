import React from 'react'

const App = () => {
  const name = "Khakashi";
  const x = 10;
  const y = 20;
  const names = ['Khakashi', "Sasuke", "Sakura", "Naruto"];
  const loggedIn = true;


  return (
    <>
      <div className='text-2xl'>Hello world</div>
      <p className='' style={{color: 'red', fontSize: '20px'}}>My name is {name}. I am learing coding</p>
      <p className='text-lg'>Sum is: {x+y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index} className='text-green-400'>{name}</li>
        ))}
      </ul>
      { loggedIn ? <p>you are logged in</p> : <p>You are not logged in</p>}
    </>
  );
}

export default App

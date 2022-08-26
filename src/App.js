import './App.css';
import React, {useState} from 'react';

let users = [];
let inputName;
let inputPassword;

class User{
  constructor(userName, userPassword){
    this.userName = userName;
    this.userPassword = userPassword;
  }
}

const App = () => {
  const [nameIn, setnameIn] = useState('');
  const [passwordIn, setpasswordIn] = useState('');

  const changeName = event => {
    inputName = event.target.value;
    setnameIn(event.target.value);
    console.log('value is:', inputName);
  }
  const changePassword = event => {
    setpasswordIn(event.target.value);
    inputPassword = event.target.value;
    console.log('value is:', inputPassword);
  }
  // const 
  return(
    <div className="App">
      <input 
        placeholder='Name' 
        className='nameInput'
        id='message'
        onChange={changeName}
        value={nameIn}
      ></input>
      <input 
        type="password"
        placeholder='Password' 
        className='passwordInput'
        id='message'
        onChange={changePassword}
        value={passwordIn}
        
      ></input>
      <button onClick={()=>{
        if(inputName == null){
          alert("no name");
          return;
        }else if(inputPassword == null){
          alert("no password");
          return;
        }
        for (let i = 0; i < users.length; i++) {
          if(users[i].userName == inputName && users[i].userPassword == inputPassword){
            alert("you logged into " + users[i].userName)
          }else{
            alert("wrong password or username");
          }
        }
        setnameIn("");
        setpasswordIn("");
        inputName = null;
        inputPassword = null;
      }}>Log in</button>
      <button onClick={() => {
          if(inputName == null){
            alert("no name");
            return;
          }else if(inputPassword == null){
            alert("no password");
            return;
          }
          users.push(new User(inputName, inputPassword))
          console.log(users);
          setnameIn("");
          setpasswordIn("");
          inputName = null;
          inputPassword = null;

      }
      }>Sign up</button>
    </div>   
  );
  
}

export default App;

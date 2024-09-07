import './App.css';
import UserTable from './components/UserTable/UserTable';

import { addItem } from './state/user/userSlice';

import React, { useState, useEffect } from 'react';

interface users {
  id: string;
  user:string;
  username: string;
  email: string;
  phone:string;

}
interface AppProps {
  users: users[]; 

  id: number
}

const App:React.FC<AppProps> = ()  => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      });
  }, [])

  return (
     <div className="App">
       <UserTable userData={users} />
     </div>
  );
}

export default App;

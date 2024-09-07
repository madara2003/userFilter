import React, { useState, useEffect } from 'react';
import './TableBody.css';

import { RootState } from '../../state/store';
import { addItem } from "../../state/user/userSlice"
import { useSelector } from 'react-redux';


interface UserTableProps {
  filters: any; 
}


const TableBody: React.FC<UserTableProps> = (filters:any) => {
  let users = useSelector((state: RootState) => state.items["users"]);
  const [data, setData] = useState([]);

  const myFunction = () => {
  let filteredItems:any = []

  users.forEach((item:any) => {
	let name = item.name.toLowerCase().includes(filters.filters.name.toLowerCase())
	let username = item.username.toLowerCase().includes(filters.filters.username.toLowerCase())
	let email = item.email.toLowerCase().includes(filters.filters.email.toLowerCase())
	let phone = item.phone.toLowerCase().includes(filters.filters.phone.toLowerCase())


	if (name && username && email && phone) {
		filteredItems.push(item);
	}
  
   })

  users = filteredItems
  };
  myFunction();

  return (

    <tbody>
      
       {users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td> 
      </tr>  
       ))} 
    </tbody>
  );
};

export default TableBody;
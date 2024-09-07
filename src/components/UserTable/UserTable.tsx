import React, { useState, useEffect } from 'react';

import Input from '../Input/Input';
import TableBody from '../TableBody/TableBody';


import { useSelector, useDispatch } from 'react-redux';

import { addItem } from "../../state/user/userSlice"
import { RootState } from '../../state/store';
import './UserTable.css';


interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website:string;
}

interface UserTableProps {
  userData: any[]; 

}

const UserTable: React.FC<UserTableProps> = ({ userData }) => {
  console.log("launcher")
  const dispatch = useDispatch();
  dispatch(addItem(userData));

  
	const [filterValue, setNewFilterValue] = useState({"name": "", "username": "", "email": "", "phone": ""});


  const handleInputEvent = (key:string, text="") => {

   if (key === "name") {
    setNewFilterValue({
      ...filterValue,
      "name": text, 
    });
   }else if(key === "username") {
    setNewFilterValue({
      ...filterValue,
      "username": text, 
    });
   }else if(key==="email") {
    setNewFilterValue({
      ...filterValue,
      "email": text, 
    });
   }else if(key==="phone") {
    setNewFilterValue({
      ...filterValue,
      "phone": text, 
    });
   }
  

}
             
  return (
    <div>
      <div className='input__container'>
        <Input inputFilter={"name"} onInputEnter={handleInputEvent} />
        <Input inputFilter={"username"} onInputEnter={handleInputEvent} />
        <Input inputFilter={"email"} onInputEnter={handleInputEvent} />
        <Input inputFilter={"phone"} onInputEnter={handleInputEvent} />
      </div>
          <table className="product-table">
          <thead>
            <tr>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>phons</th>
            </tr>
          </thead>
          <TableBody filters={filterValue} />
        </table>
        
     </div>
  );
}

export default UserTable;
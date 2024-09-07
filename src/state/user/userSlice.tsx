import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface user {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string
 }
  
interface UserState {
	users: user[];
  }
  
  // Initial state
  const initialState: UserState = {
	users: []
  };

  	const itemsSlice = createSlice({
		name: 'items',
		initialState,
		reducers: { 
	    	addItem: (state, action:PayloadAction<user[]>) => {
			console.log("darce")
			state.users = action.payload; 
			console.log(action.payload)
	  },
	},
  });
  
  export const { addItem } = itemsSlice.actions;
  export default itemsSlice.reducer;


import React, { useState } from 'react';

import './Input.css';

interface GreetingProps {
  inputFilter: string; 
  onInputEnter:  (a:string, b:string) => void;
}
const Input: React.FC<GreetingProps> = ({ inputFilter, onInputEnter }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (event:any) => {
	onInputEnter(inputFilter,event.target.value);
  };

  const dynamicStyle = {
    color: isFocused ? '#000000' : '#45a049',
  };
  
  return (
        <div className="container">
		      <h3 style={dynamicStyle}>{inputFilter}</h3>
          <input onFocus={handleInputFocus}
		        className="input" 
				    onChange={handleInputChange}
				    onBlur={handleInputBlur}/>
        </div>
  );
}

export default Input;
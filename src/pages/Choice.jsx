import React from 'react';
import { Link } from 'react-router-dom';
import "./Choice.css"
const Choice = () => {
  return (
    <div className='choice'>


      <div className="choice-btns">

        
          {/* Link to the Update page */}
          <div className="update-btn">
            <Link to="/update">
                <button className='btn'>UPDATE</button>
              </Link>
          </div>
     
        <div className="delete-btn">
           {/* Link to the Delete page */}
             <Link to="/delete">
                <button className='btn'>DELETE</button>
             </Link>
        </div>
    
      </div>
      
    </div>
  );
};

export default Choice;

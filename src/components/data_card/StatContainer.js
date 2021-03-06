import React from 'react';
import './StatContainer.css';

class StatContainer extends React.Component  {
  render(){
    return (
      <div className="StatContainer">
        <div className='statHeader'>
            {/* Will Be replaced dynamicaly */}
            <p className='letter' id="statLetter">M</p>
        </div>
        <div className='statNum'>
            {/* Will Be replaced dynamicaly */}
            <p className='movement' id='statNum'>6"</p>
        </div>
      </div>
    );
  }
}

export default StatContainer;
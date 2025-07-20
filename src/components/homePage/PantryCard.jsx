import React, { useState } from 'react';
import './Home.css';

function PantryCard({ pantry }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleCardClick() {
    setShowDetails(!showDetails);
  }

  return (
    <div className={`locationCard ${showDetails ? 'popped' : ''}`} onClick={handleCardClick}>
      <h3>{pantry.pantryName}</h3>
      <p>{pantry.address}, {pantry.city}, {pantry.state} {pantry.zipCode}
      </p>{pantry.hours && (<p><strong>Hours:</strong> {pantry.hours}</p>)}
      {pantry.contact && (<p><strong>Contact:</strong> {pantry.contact}</p>)}
      {/* {pantry.requirements && pantry.requirements.length > 0 && (
        <ul>
          {pantry.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      )} */
    }
    </div>
  );
}

export default PantryCard;

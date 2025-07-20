import React from 'react';
import './Home.css'

function PantryCard({ pantry }) {
  return (
    <div className="locationCard">
      <h3>{pantry.pantryName}</h3>
      <p>{pantry.address}, {pantry.city}, {pantry.state} {pantry.zipCode}</p>
      {pantry.hours && <p><strong>Hours:</strong> {pantry.hours}</p>}
      {pantry.contact && <p><strong>Contact:</strong> {pantry.contact}</p>}
      {pantry.requirements && pantry.requirements.length > 0 && (
        <ul>
          {pantry.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PantryCard;

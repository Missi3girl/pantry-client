import React from 'react';
import './Home.css';

function PantryCard({ pantry, onClick, isSelected }) {
  return (
    <div
      className={`locationCard ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
      id={pantry._id} // Use the pantry ID as the element ID for scrolling
    >
      <h3>{pantry.pantryName}</h3>
    </div>
  );
}

export default PantryCard;
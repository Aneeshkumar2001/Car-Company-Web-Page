import React from 'react';

const CarList = ({ cars }) => {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    padding: '15px',
  };

  const carCardStyle = {
    backgroundColor: '#F5F5F5', 
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
  };

  const carCardHoverStyle = {
    transform: 'scale(1.03)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#E8F5E9', 
  };

  const carImageStyle = {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderBottom: '4px solid #007BFF',
  };

  const carDetailsStyle = {
    padding: '10px',
    textAlign: 'center',
  };

  const carNameStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '5px',
    padding: '8px',
    borderRadius: '5px',
    backgroundColor: '#FF5722', 
    transition: 'color 0.3s, background-color 0.3s',
  };

  const carBrandStyle = {
    fontSize: '14px',
    color: '#ffffff',
    marginBottom: '5px',
    padding: '8px',
    borderRadius: '5px',
    backgroundColor: '#00BCD4', 
    transition: 'color 0.3s, background-color 0.3s',
  };

  const carPriceStyle = {
    fontSize: '16px',
    color: '#007BFF', 
    fontWeight: 'bold',
  };

  const carNameHoverStyle = {
    color: '#FF5722', 
    backgroundColor: '#ffffff', 
  };

  const carBrandHoverStyle = {
    color: '#00BCD4', 
    backgroundColor: '#ffffff', 
  };

  return (
    <div style={gridContainerStyle}>
      {cars.map((car) => (
        <div
          key={car.id}
          style={carCardStyle}
          onMouseEnter={(e) => e.currentTarget.style = { ...carCardStyle, ...carCardHoverStyle }}
          onMouseLeave={(e) => e.currentTarget.style = carCardStyle}
        >
          <img
            src={`https://via.placeholder.com/300x120?text=${car.brand}`} 
            alt={`${car.brand} ${car.name}`}
            style={carImageStyle}
          />
          <div style={carDetailsStyle}>
            <div
              style={carNameStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = carNameHoverStyle.color;
                e.currentTarget.style.backgroundColor = carNameHoverStyle.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = carNameStyle.color;
                e.currentTarget.style.backgroundColor = carNameStyle.backgroundColor;
              }}
            >
              {car.name}
            </div>
            <div
              style={carBrandStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = carBrandHoverStyle.color;
                e.currentTarget.style.backgroundColor = carBrandHoverStyle.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = carBrandStyle.color;
                e.currentTarget.style.backgroundColor = carBrandStyle.backgroundColor;
              }}
            >
              {car.brand}
            </div>
            <div style={carPriceStyle}>{car.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;

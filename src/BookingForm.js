import React, { useState } from 'react';

const BookingForm = ({ cars, addBooking }) => {
  const [carId, setCarId] = useState(cars[0]?.id || '');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const car = cars.find((c) => c.id === parseInt(carId));
    const newBooking = {
      car,
      user: { name: userName, email: userEmail },
    };

    addBooking(newBooking);
    setUserName('');
    setUserEmail('');
  };

  const formContainerStyle = {
    backgroundColor: '#f4f4f9',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
  };

  const formTitleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#007BFF',
    fontSize: '22px',
    fontWeight: '600',
    borderBottom: '2px solid #007BFF',
    paddingBottom: '10px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const labelStyle = {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '14px',
    boxSizing: 'border-box',
    outline: 'none',
    backgroundColor: '#fff',
    color: '#333',
    transition: 'border-color 0.3s, box-shadow 0.3s, background-color 0.3s',
  };

  const selectStyle = {
    ...inputStyle,
    padding: '8px',
  };

  const inputFocusStyle = {
    borderColor: '#007BFF',
    boxShadow: '0 0 4px rgba(0, 123, 255, 0.3)',
  };

  const inputHoverStyle = {
    backgroundColor: '#f0f8ff', 
    borderColor: '#0056b3', 
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.3s',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'translateY(-2px)',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
  };

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);

  return (
    <div style={formContainerStyle}>
      <h2 style={formTitleStyle}>Book a Test Drive</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label style={labelStyle}>Select Car:</label>
          <select 
            value={carId} 
            onChange={(e) => setCarId(e.target.value)} 
            style={selectStyle} 
            onFocus={(e) => e.target.style = {...inputStyle, ...inputFocusStyle}}
            onBlur={(e) => e.target.style = inputStyle}
            onMouseEnter={() => setIsInputHovered(true)}
            onMouseLeave={() => setIsInputHovered(false)}
          >
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.brand} {car.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ ...labelStyle, color: '#28a745' }}>Your Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={isInputHovered ? { ...inputStyle, ...inputHoverStyle } : inputStyle}
            required
            onFocus={(e) => e.target.style = {...inputStyle, ...inputFocusStyle}}
            onBlur={(e) => e.target.style = inputStyle}
            onMouseEnter={() => setIsInputHovered(true)}
            onMouseLeave={() => setIsInputHovered(false)}
          />
        </div>
        <div>
          <label style={{ ...labelStyle, color: '#dc3545' }}>Your Email:</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            style={isInputHovered ? { ...inputStyle, ...inputHoverStyle } : inputStyle}
            required
            onFocus={(e) => e.target.style = {...inputStyle, ...inputFocusStyle}}
            onBlur={(e) => e.target.style = inputStyle}
            onMouseEnter={() => setIsInputHovered(true)}
            onMouseLeave={() => setIsInputHovered(false)}
          />
        </div>
        <button
          type="submit"
          style={isButtonHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Book Test Drive
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

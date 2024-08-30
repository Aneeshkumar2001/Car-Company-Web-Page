import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CarList from './CarList';
import BookingForm from './BookingForm';
import AdminView from './AdminView';

const App = () => {
  const [cars, setCars] = useState([
    { id: 1, name: 'Swift Dzire', brand: 'Maruti', available: true },
    { id: 2, name: 'Innova', brand: 'Toyota', available: true },
    { id: 3, name: 'Creta', brand: 'Hyundai', available: true },
  ]);

  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
    setUsers([...users, booking.user]);
  };

  const appStyle = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
  };

  const containerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '800px',
    width: '100%',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
  };

  const adminButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none', 
  };

  const headerStyle = {
    color: '#00BFFF', 
    marginBottom: '20px',
  };

  return (
    <Router>
      <div style={appStyle}>
        <Link to="/admin" style={adminButtonStyle}>
          Admin
        </Link>
        <div style={containerStyle}>
          <h1 style={headerStyle}>Welcome to Indian Cars</h1>
          <Routes>
            <Route path="/" element={<>
              <CarList cars={cars} />
              <BookingForm cars={cars} addBooking={addBooking} />
            </>} />
            <Route path="/admin" element={<AdminView bookings={bookings} users={users} cars={cars} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

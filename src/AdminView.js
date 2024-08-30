import React from 'react';

const AdminView = ({ bookings, users, cars }) => {
  const adminContainerStyle = {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    color: '#000',
  };

  const tableContainerStyle = {
    marginTop: '20px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  };

  const thStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '12px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
  };

  const tdStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd',
  };

  const headerStyle = {
    marginBottom: '10px',
    fontSize: '24px',
    color: '#007BFF',
  };

  const noDataStyle = {
    textAlign: 'center',
    padding: '20px',
    color: '#999',
    fontStyle: 'italic',
  };

  return (
    <div style={adminContainerStyle}>
      <h2 style={headerStyle}>Admin View</h2>
      
      <div style={tableContainerStyle}>
        <h3>All Bookings</h3>
        {bookings.length === 0 ? (
          <p style={noDataStyle}>No bookings available</p>
        ) : (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>User Name</th>
                <th style={thStyle}>User Email</th>
                <th style={thStyle}>Car Brand</th>
                <th style={thStyle}>Car Name</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{booking.user.name}</td>
                  <td style={tdStyle}>{booking.user.email}</td>
                  <td style={tdStyle}>{booking.car.brand}</td>
                  <td style={tdStyle}>{booking.car.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    

      <div style={tableContainerStyle}>
        <h3>Showroom Cars</h3>
        {cars.length === 0 ? (
          <p style={noDataStyle}>No cars available</p>
        ) : (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Car Brand</th>
                <th style={thStyle}>Car Name</th>
                <th style={thStyle}>Availability</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.id}>
                  <td style={tdStyle}>{car.brand}</td>
                  <td style={tdStyle}>{car.name}</td>
                  <td style={tdStyle}>{car.available ? 'Available' : 'Not Available'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminView;

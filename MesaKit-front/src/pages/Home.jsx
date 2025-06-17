import React from 'react';
import ReservationForm from '../components/ReservationForm';

const Home = () => {
  const handleReservationSubmit = (data) => {
    console.log('Reservación enviada:', data);
  }; // This function will handle the reservation data when the form is submitted se puede adaptar para enviar a una base de datos o API




  return (
    <div>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default Home;

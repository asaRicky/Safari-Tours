import React from 'react';
import Tour from './Tour';

const TourList = ({ tours, removeTour, onAddTour, booked }) => {
  return (
    <section>
      <h1>Booked</h1>
      {booked.map((tour) => {
        return <Tour key={tour.id} tour={tour} {...tour} removeTour={removeTour} onAddTour={onAddTour} />;
      })}
    </section>
  );
};

export default TourList;

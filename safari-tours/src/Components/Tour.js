import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour, onAddTour, bookTrip, tour, isInTour }) => {
  const [readMore, setReadMore] = useState(false);
  // const [Booked, setBooked] = useState(false);

  // const handleAddTour = () => {
  //   setBooked(true);
  //   onAddTour({ id, name, price });
  // };

  return (
    <article className="single-tour">
      <img src={image} alt={name}  />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
        <button className="request-btn" onClick={() => bookTrip(tour, isInTour)}>
          {/* {Booked ? 'Booked' : 'Book'} */}
          Book
        </button>
      </footer>
    </article>
  );
};

export default Tour;

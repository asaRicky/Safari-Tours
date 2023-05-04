import React, { useState, useEffect } from 'react'
import Loading from './Components/Loading'
import Tours from './Components/Tours'
import TourList from './Components/TourList'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const [booked, setBooked] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  function bookTrip(tour, isInTour) {
    if (booked.includes(tour) && isInTour) {
      setBooked(booked.filter(({id}) => id !== tour.id))
    } else if (booked.includes(tour) === false) {
      setBooked([...booked, tour])
    }
  }

  console.log(booked);

  return (
    <main>
      <Navbar />
      <Routes >
        <Route path='/' element={<Tours tours={tours} removeTour={removeTour} bookTrip={bookTrip} />} />
      {/* <Tours tours={tours} removeTour={removeTour} bookTrip={bookTrip} /> */}
      <Route path='/booked' element={<TourList booked={booked} />} />
      
      </Routes>
    </main>
  )
}

export default App
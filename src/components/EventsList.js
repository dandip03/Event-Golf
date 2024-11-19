import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/EventsList.css'; // Import CSS for Events List

function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('https://livegolfapi.p.rapidapi.com/v1/events', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '5e93e58f7cmsh7a6bb1335f6c664p18b435jsn1dd953d3451f',
          'x-rapidapi-host': 'livegolfapi.p.rapidapi.com'
        }
      });
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-list fade-in">
      <h1 className="fade-in">Golf Events</h1>
      <h2 className="welcome-message slide-in">Welcome to the Golf Event Application</h2> {/* Welcome message */}
      <p className="fade-in">Explore upcoming golf events, check their details, and view the leaderboard.</p>

      <ul>
        {events.map(event => (
          <li key={event.id} className="event-item slide-in">
            <Link to={`/event/${event.id}`} className="event-link">
              {event.logoUrl && (
                <img src={event.logoUrl} alt={event.name} className="event-logo" />
              )}
              <span className="event-name">{event.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;

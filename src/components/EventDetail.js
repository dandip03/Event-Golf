import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/EventDetail.css'; // Import CSS for Event Detail

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`https://livegolfapi.p.rapidapi.com/v1/events/${id}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '5e93e58f7cmsh7a6bb1335f6c664p18b435jsn1dd953d3451f',
          'x-rapidapi-host': 'livegolfapi.p.rapidapi.com'
        }
      });
      const data = await response.json();
      setEvent(data);
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-detail">
      <h1>{event.name}</h1>
      <div className="event-header">
        <img src={event.logoUrl} alt={event.name} className="event-logo" />
        <p className="event-status"><strong>Status:</strong> {event.status}</p>
      </div>
      
      <div className="event-info">
        <p><strong>Course:</strong> {event.course}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Slug:</strong> {event.slug}</p>
        <p><strong>Link:</strong> <a href={event.link} target="_blank" rel="noopener noreferrer">Event Page</a></p>
      </div>

      <h2>Leaderboard</h2>
      {event.leaderboard && event.leaderboard.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Player</th>
              <th>Strokes</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {event.leaderboard.map((entry, index) => (
              <tr key={index}>
                <td>{entry.position}</td>
                <td>{entry.player}</td>
                <td>{entry.strokes}</td>
                <td>{entry.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No leaderboard data available.</p>
      )}
    </div>
  );
}

export default EventDetail;

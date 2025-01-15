import React, { useState } from 'react';
import './UpcomingEvents.css';

function UpcomingEvents() {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        title: '',
        description: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setNewEvent({ ...newEvent, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddEvent = () => {
        if (newEvent.title.trim() && newEvent.description.trim()) {
            const newEventWithTimestamp = {
                ...newEvent,
                timestamp: new Date().toLocaleString(),
            };
            setEvents([...events, newEventWithTimestamp]);
            setNewEvent({
                title: '',
                description: '',
                image: null,
            });
        }
    };

    return (
        <div className="upcoming-events">
            <h2>Upcoming Events</h2>
            <div className="new-event">
                <input
                    type="text"
                    name="title"
                    value={newEvent.title}
                    onChange={handleChange}
                    placeholder="Event Title"
                />
                <textarea
                    name="description"
                    value={newEvent.description}
                    onChange={handleChange}
                    placeholder="Event Description"
                ></textarea>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                {newEvent.image && (
                    <img
                        src={newEvent.image}
                        alt="Preview"
                        className="preview-image"
                    />
                )}
                <button onClick={handleAddEvent}>Add Event</button>
            </div>
            <div className="events">
                {events.map((event, index) => (
                    <div key={index} className="event">
                        {event.image && (
                            <img
                                src={event.image}
                                alt={event.title}
                                className="event-image"
                            />
                        )}
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <small>{event.timestamp}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingEvents;

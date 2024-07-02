import React, { useEffect, useState } from 'react';

const Beginner = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/lessons/beginner')
            .then(response => response.json())
            .then(data => setLessons(data));
    }, []);

    return (
        <div>
            <h2>Beginner Level</h2>
            <ul>
                {lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                ))}
            </ul>
        </div>
    );
};

export default Beginner;

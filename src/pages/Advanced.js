import React, { useEffect, useState } from 'react';

const Advanced = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/lessons/advanced')
            .then(response => response.json())
            .then(data => setLessons(data));
    }, []);

    return (
        <div>
            <h2>Advanced Level</h2>
            <ul>
                {lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                ))}
            </ul>
        </div>
    );
};

export default Advanced;
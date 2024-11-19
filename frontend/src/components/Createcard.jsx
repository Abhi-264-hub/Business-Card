import React, { useState } from 'react';

export function Createcard() {
    const [f1, setF1] = useState('');
    const [f2, setF2] = useState('');
    const [f3, setF3] = useState('');
    const [f4, setF4] = useState('');
    const [f5, setF5] = useState('');

    const storeInDB = () => {
        // Data you want to send
        const data = {
            Name: f1,
            Aboutme: f2,
            Interests: f3,
            Linkedin: f4,
            Twitter: f5
        };

        // POST request
        fetch('http://localhost:3000/card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Name"
                onChange={(e) => setF1(e.target.value)}
            /><br />
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="About Me"
                onChange={(e) => setF2(e.target.value)}
            /><br />
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Interests"
                onChange={(e) => setF3(e.target.value)}
            /><br />
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="LinkedIn"
                onChange={(e) => setF4(e.target.value)}
            /><br />
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Twitter"
                onChange={(e) => setF5(e.target.value)}
            /><br />
            <button
                style={{ padding: 10, margin: 10 }}
                onClick={storeInDB}
            >
                Add Card
            </button>
            <button
                style={{ padding: 10, margin: 10 }}
                onClick={stord}
            >
                Get Card By ID
            </button>
        </div>
    );
}

export default Createcard;

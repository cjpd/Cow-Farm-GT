import React, { useState, useEffect } from 'react';
import api from '../services/api';
import SearchFilter from './SearchFilter';

const Cows = () => {
  const [cows, setCows] = useState([]);

  useEffect(() => {
    fetchCows();
  }, []);

  const fetchCows = async () => {
    const response = await axios.get('http://localhost:5001/api/cows');
    setCows(response.data);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Color</th>
            <th>Sex</th>
            <th>Location</th>
            {/* Add other columns as needed */}
          </tr>
        </thead>
        <tbody>
          {cows.map((cow) => (
            <tr key={cow.id}>
              <td>{cow.id}</td>
              <td>{cow.color}</td>
              <td>{cow.sex}</td>
              <td>{cow.location}</td>
              {/* Add other data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add cow management UI components and functionality here */}
    </div>
  );
};

export default Cows;

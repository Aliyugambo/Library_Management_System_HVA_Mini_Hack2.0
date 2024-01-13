import React, { useEffect } from 'react';

import axios from 'axios';

const TestComponent = () => {
  useEffect(() => {
    axios.get('http://localhost:4000/api/test')
      .then(response => console.log('Request successful:', response))
      .catch(error => console.error('Error making request:', error));
  }, []);

  return (
    <div>
      <p>Testing CORS</p>
    </div>
  );
};

export default TestComponent;

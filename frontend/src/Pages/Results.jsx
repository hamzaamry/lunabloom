import React, { useState, useEffect } from "react";
import axios from "axios";

const Results = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/results');
        setData(response.data);
        console.log('........data.........')
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Target Audience:</h2>
          <p>{data.targetAudience}</p>

          <h2>Platform Selections:</h2>
          <p>{data.platformSelections}</p>

          <h2>Content Type:</h2>
          <p>{data.contentType}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Results;

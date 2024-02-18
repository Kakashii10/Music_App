import React, { useEffect } from 'react';

function FetchAllData({ onReceiveFetchData }) {
  useEffect(() => {
    fetch("https://musicapi.x007.workers.dev/search?q=Happy&searchEngine=gaama")
      .then((response) => response.json())
      .then((data) => {
        onReceiveFetchData(data.response); // Update the state with the fetched songs
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [onReceiveFetchData]); // Include onReceiveFetchData in the dependency array

  return null; // This component doesn't render anything
}

export default FetchAllData;

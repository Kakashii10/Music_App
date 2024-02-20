import { useEffect } from 'react';

function FetchAllData({ onReceiveFetchData, songName }) {
  useEffect(() => {
    fetch(`https://musicapi.x007.workers.dev/search?q=${songName}&searchEngine=gaama`)
      .then((response) => response.json())
      .then((data) => {
        onReceiveFetchData(data.response); // Update the state with the fetched songs
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [songName]); // Include onReceiveFetchData in the dependency array

  return null; // This component doesn't render anything
}

export default FetchAllData;

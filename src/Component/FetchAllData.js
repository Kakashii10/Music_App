import { useEffect } from 'react';

function FetchAllData({ onReceiveFetchData, songName }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://musicapi.x007.workers.dev/search?q=${songName}&searchEngine=gaama`);
        const data = await response.json();
        onReceiveFetchData(data.response); // Update the state with the fetched songs
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [onReceiveFetchData, songName]); // Include onReceiveFetchData and songName in the dependency array

  return null; // This component doesn't render anything
}

export default FetchAllData;

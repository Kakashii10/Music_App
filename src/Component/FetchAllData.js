import React, { useEffect} from "react";

function FetchAllData({onReceiveFetchData} ) {
  useEffect(() => {
    fetch('https://musicapi.x007.workers.dev/search?q=Happy&searchEngine=gaama')
      .then((response) => response.json())
      .then((data) => {
        onReceiveFetchData(data.response); // Update the state with the fetched songs
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* {songs.map((song) => (
        <div key={song.id}>
          <p>ID: {song.id}</p>
          <p>Title: {song.title}</p>
          <img src={song.img} alt={song.title} />
        </div>
      ))} */}
    </div>
  );
}

export default FetchAllData;

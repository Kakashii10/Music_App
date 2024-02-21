import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlaySong() {
  const { userId } = useParams();
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://musicapi.x007.workers.dev/fetch?id=${userId}`);
        const data = await response.json();
        setSongInfo(data.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      {songInfo ? (
        <audio controls autoPlay>
          <source src={songInfo} type="audio/mpeg" />          
        </audio>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default PlaySong;

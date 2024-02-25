import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHlsPlayer from 'react-hls-player';
import style from '../Css/PlaySong.module.css';


function PlaySong() {
  const { userId } = useParams();
  const decodedJsonString = decodeURIComponent(userId);
  const parsedJsonData = JSON.parse(decodedJsonString);
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    console.log(parsedJsonData.id);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://musicapi.x007.workers.dev/fetch?id=${parsedJsonData.id}`
        );
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
        // <audio controls autoPlay>
        //   <source src={songInfo} type="audio/mpeg" />
        // </audio>
        <div className={style.appContainer}>
           <img src={parsedJsonData.img} alt="no image" style={{ width: "30%" }} />
          <ReactHlsPlayer
            src={songInfo}
            autoPlay
            controls
            width="640"
            height="80" // Adjust height for audio player
            onPause={() => console.log('Audio paused')}
            onError={(e) => console.error('Error occurred:', e)}
            // Add more event handlers and props as needed
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default PlaySong;

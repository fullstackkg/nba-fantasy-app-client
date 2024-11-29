import axios from "axios";
import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

const baseUrl = "//localhost:8080/api/players?page=0";

const PlayersPage = () => {
  const [players, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios.get(baseUrl).then((response) => {
        setPlayer(response.data);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="main-container border-2 border-blue-500 flex flex-col min-h-[calc(100vh-5rem)] justify-center items-center">
      <div className="players-container border-2 border-red-500 max-w-[1170px] w-[90%] h-full mx-auto flex gap-6 justify-evenly items-center flex-wrap">
        {players.map((player) => {
          return <PlayerCard key={player.playerId} player={player} />;
        })}
      </div>
    </div>
  );
};

export default PlayersPage;

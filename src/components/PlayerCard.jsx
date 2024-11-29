const PlayerCard = ({ player }) => {
  return (
    <a>
      <div className="player-card-container border border-slate-400 bg-slate-100 shadow-lg rounded-lg px-2 pb-4 pt-6 flex flex-col items-center text-center w-60 h-[300px]">
        <div className="player-image w-[100%] h-[35%] bg-slate-100 mb-4">
          <img
            src={player.playerImageUrl}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div className="player-info h-[40%] flex flex-col justify-start items-center">
          <p className="player-name text-xl leading-6 font-bold">
            {player.firstName} {player.lastName}
          </p>
          <img src={player.teamImageUrl} alt="" className="block w-28 h-28" />
        </div>
      </div>
    </a>
  );
};

export default PlayerCard;

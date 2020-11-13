import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  libraryStatus,
  isPlaying,
  setIsPlaying,
  setSongs,
  audioRef,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            setIsPlaying={setIsPlaying}
            id={song.id}
            isPlaying={isPlaying}
            setSongs={setSongs}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;

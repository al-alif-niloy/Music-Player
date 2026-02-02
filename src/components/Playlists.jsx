

export const Playlists = () => {
    return (
        <div className="playLists">
            <h1>Playlists</h1>

            {/* {create new playlist} */}
            <div className="create-playlists">
                <h3>Create New Playlists</h3>
                <div className="playlists-form">
                    <input 
                    type="text"
                    placeholder="playlist name..."
                    className="playlist-input" 
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    value={newPlaylistName}
                    />
                    <button className="create-btn"
                    onClick={handleCreatePlaylist}>Create</button>
                </div>
            </div>
        </div>
    );
}
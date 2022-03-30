

export const authEndpoints = "https://accounts.spotify.com/authorize";

const redirectURL = "http://localhost:3000/";

const clientId = "fbac36299d404507917887ca0a147e61";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-private", "playlist-read-private", "playlist-modify-public", "playlist-modify-private"
  ];

  export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };

  export const loginUrl = `${authEndpoints}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

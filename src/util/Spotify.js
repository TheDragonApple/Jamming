
var userToken = "";
var clientId = "30a6d062276e433888510c86f5bc0866";
const redirectUrl = "http://localhost:3000/";

function Spotify(){

    function getAccessToken(){
        if(userToken){
            return userToken;
        }
        const tokenInUrl = window.location.href.match(/access_token=([^&]*)/);
        const exprTime = window.location.href.match(/expires_in=([^&]*)/);

        if(tokenInUrl && exprTime){
            userToken = tokenInUrl[1];
            const expiresIn = Number(exprTime[1]);

            window.setTimeout(() => (userToken = ""), exprTime * 1000);

            window.history.pushState("Access token", null, "/");
            return userToken;
        }

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
    };

};

export default Spotify;
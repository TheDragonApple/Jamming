
var userToken = "";
var clientId = "30a6d062276e433888510c86f5bc0866";
const redirectUrl = "http://localhost:3000/";


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

async function search(term){
        getAccessToken();
        const header = {Authorization: `Bearer ${userToken}`};
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(term)}&type=track`, {
                headers: header
            });
            if(response.ok){
                const jsonResponse = await response.json();
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name
                }))
            }
            if(!response.ok){
                const errorData = await response.json();
                console.error("Error from API: ", errorData);
                throw new Error(`Spotify API Error: ${errorData.error.message}`);
            }
            else{
                return console.log("error getting data");
            }
        } catch(error){
            console.log(error);
        }
    };

export {search, getAccessToken};
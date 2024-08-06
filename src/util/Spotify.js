
var userToken = "";
var clientId = "30a6d062276e433888510c86f5bc0866";
const redirectUrl = "http://localhost:3000/";
var newUrl;


function getTokenFromUrl(){
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');

    if (token) {
        userToken = token;
        console.log(userToken);
    } else {
        console.log('No access token found.');
    }
 }

 async function getAccessToken(){
    var url= 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&redirect_uri=' + encodeURIComponent(redirectUrl);

    window.location.href = url;
 }




async function search(term){
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
                    album: track.album.name,
                    uri: track.uri
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

async function savePlaylist(uriArray, name){
    if(!uriArray || !name){
        return;
    }
    const header = {Authorization: `Bearer ${userToken}`};
    let userId = "";
    let playlistId = "";

    //get user's Spotify username
    try{
        const response = await fetch(`https://api.spotify.com/v1/me`, {
            headers: header
        });
        if(response.ok){
            const jsonResponse = await response.json();
            userId = jsonResponse.id;
        }
    } catch(error){
        console.log(error);
    }

    //Create new playlist
    try{
        const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: header,
            data: {
                name: name,
            }
        });
        if(response.ok){
            const jsonResponse = await response.json();
            playlistId = jsonResponse.id;
        }

    } catch(error){
        console.log(error);
    }

    //Add songs to playlist
    try{
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: header,
            data: {
                "uris": uriArray
            }
        });
    } catch(error){
        console.log(error);
    }
};

export {search, getAccessToken, savePlaylist, getTokenFromUrl};
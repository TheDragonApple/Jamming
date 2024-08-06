
var userToken = "";
var clientId = "30a6d062276e433888510c86f5bc0866";
const redirectUrl = "https://Jamming.surge.sh";
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
    var scope = 'playlist-modify-public playlist-modify-private';
    var url= 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&scope=' + encodeURIComponent(scope);
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

async function savePlaylist(uriArray, playlistName){
    if(!uriArray || !playlistName){
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
            headers: {
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: playlistName
            })
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
            headers: {
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                uris: uriArray
            })
        });
    } catch(error){
        console.log(error);
    }
};

export {search, getAccessToken, savePlaylist, getTokenFromUrl};
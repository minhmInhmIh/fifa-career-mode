const songs = [
    "soundtracks/MICE.mp3",
    "soundtracks/Unity.mp3"
]


function random_song(){
    const random_song_index = Math.floor(Math.random() * songs.length)
    const audio = new Audio(songs[random_song_index]);
    audio.play()

    audio.onended = function(){
        random_song()
    }
}

window.onload = function(){
    random_song();
}
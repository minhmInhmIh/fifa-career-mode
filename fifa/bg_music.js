document.addEventListener("DOMContentLoaded", function () {
   const audioPlayer = document.getElementById("audioPlayer");
   const playlistItems = document.querySelectorAll("#playlist ul li");
   let currentIndex = 0;
   // Load the first song
   audioPlayer.src = playlistItems[currentIndex].getAttribute("data-src");
   // Play the selected song on click
   playlistItems.forEach((item, index) => {
       item.addEventListener("click", () => {
           currentIndex = index;
           audioPlayer.src = item.getAttribute("data-src");
           audioPlayer.play();
       });
   });
   // Play the next song when the current one ends
   audioPlayer.addEventListener("ended", () => {
       currentIndex = (currentIndex + 1) % playlistItems.length;
       audioPlayer.src = playlistItems[currentIndex].getAttribute("data-src");
       audioPlayer.play();
   });
});
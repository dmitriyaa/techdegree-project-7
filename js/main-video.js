document.addEventListener('DOMContentLoaded', () => {

   $('#main-video').mediaelementplayer({
      poster: "js/mediaElement/poster.png",
      videoWidth: "100%",
      videoHeight: "100%",
      startVolume: '0.5',
   });

   const video = document.querySelector('#main-video');
   const transcript__pieces = document.querySelectorAll('.transcript span');

   // function that removes classes from array elements
   function removeClass(array) {
      for (let i = 0; i < array.length; i += 1) {
         array[i].className = "";
      }
   }

   // As the media playback time changes, sentences in the transcript are highlighting.
   video.addEventListener('timeupdate', (e) => {
      let current_time = video.currentTime;

      removeClass(transcript__pieces);

      for (let i = 0; i < transcript__pieces.length; i += 1) {
         let transcript__piece = transcript__pieces[i];
         let transcript__time = transcript__piece.getAttribute('data-time');

         if (current_time < transcript__time) {
            transcript__piece.className = "is-highlited";
            break;
         }
      }
   });

   // When the user clicks on any sentence in the transcript the video player jumps to the appropriate time in the video.
   for (let i = 0; i < transcript__pieces.length; i += 1) {
      let transcript__piece = transcript__pieces[i];
      // contains reference to the previous span element, because start time of current transcript piece is end time of previous
      let transcript__piece_previous = transcript__pieces[i - 1];

      transcript__piece.addEventListener('click', (e) => {
         if (transcript__piece_previous == null) {
            video.currentTime = 0;
         } else {
            video.currentTime = transcript__piece_previous.getAttribute('data-time');
         }
      });
   }
});

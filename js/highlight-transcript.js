document.addEventListener('DOMContentLoaded', () => {
   const video = document.querySelector('#main-video');
   const transcript__pieces = document.querySelectorAll('.transcript span');

   video.addEventListener('timeupdate', (e) => {
      // t means current time of the video
      let t = video.currentTime;

      // remove styling from all the spans
      for (let i = 0; i < transcript__pieces.length; i += 1) {
         transcript__pieces[i].className = "";
      }

      // highlight appropriate spann
      if (t < 0.24) {
         
      } else if (t < 4.13) {
         transcript__pieces[0].className = "is-highlited";
      } else if (t < 7.535) {
         transcript__pieces[1].className = "is-highlited";
      } else if (t < 11.27) {
         transcript__pieces[2].className = "is-highlited";
      } else if (t < 13.960) {
         transcript__pieces[3].className = "is-highlited";
      } else if (t < 17.940) {
         transcript__pieces[4].className = "is-highlited";
      } else if (t < 22.370) {
         transcript__pieces[5].className = "is-highlited";
      } else if (t < 26.880) {
         transcript__pieces[6].className = "is-highlited";
      } else if (t < 30.920) {
         transcript__pieces[7].className = "is-highlited";
      } else if (t < 34.730) {
         transcript__pieces[8].className = "is-highlited";
      } else if (t < 39.430) {
         transcript__pieces[9].className = "is-highlited";
      } else if (t < 41.190) {
         transcript__pieces[10].className = "is-highlited";
      } else if (t < 46.3) {
         transcript__pieces[11].className = "is-highlited";
      } else if (t < 49.27) {
         transcript__pieces[12].className = "is-highlited";
      } else if (t < 53.76) {
         transcript__pieces[13].className = "is-highlited";
      } else if (t < 57.78) {
         transcript__pieces[14].className = "is-highlited";
      } else if (t < 60.15) {
         transcript__pieces[15].className = "is-highlited";
      }
   });
});

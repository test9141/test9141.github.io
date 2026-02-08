'use strict';

function perf() {
    // Function to remove existing video-background elements
    function removeVideoBackground() {
      const existingVideos = document.querySelectorAll('#video-background');
      existingVideos.forEach(video => {
        video.remove();
      });
    }
  
    // Good UI or faster version of site
    if (navigator.deviceMemory < 2 || performance.now() > 3000) {
      console.log("low memory: " + navigator.deviceMemory);
      console.log("slow performance: " + performance.now());
      removeVideoBackground();
      
      const elements = document.querySelectorAll('.blur');
      elements.forEach((element, i) => {
        element.classList.remove("blur");
        element.classList.add("plain-color");
      });
      const performanceMode = document.getElementById('performanceMode');
      performanceMode.classList.toggle('active');
      setTimeout(() => performanceMode.classList.toggle('active'), 2000);     
    } else {
      console.log("high memory: " + navigator.deviceMemory);
      console.log("fast performance: " + performance.now());
      console.log("fast enough cpu");

      const elements = document.querySelectorAll('.plain-color');
      elements.forEach((element, i) => {
        element.classList.remove("plain-color");
        element.classList.add("blur");
      });
    }
};

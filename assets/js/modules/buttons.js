'use strict';

function buttons() {
  const elementIds = ['game-page-btn', 'game-page', 
                      'draw-page-btn', 'draw-page', 
                      'chat-page-btn', 'chat-page', 
                      'block-page-btn', 'block-page', 
                      'music-page-btn', 'music-page', 
                      'dm-page-btn', 'dm-page', 
                      'voicechat-page-btn', 'voice-chat',
                      'background-page-btn', 'background-page',
                      'fullscreen-btn'];
  const elements = {};
  
  for (const id of elementIds) {
    const element = document.getElementById(id);
    if (element) {
      elements[id] = element;
    }
  }

  // List of all page elements
  const pages = [
    'game-page', 'draw-page', 'chat-page',
    'block-page', 'music-page', 'background-page',
    'dm-page', 'voicechat-page'
  ];
  
  // Add click listeners
  pages.forEach(page => {
    const btn = elements[page + `-btn`];
    const target = elements[page];
  
    btn.addEventListener('click', () => {
      // Remove 'active' from all pages
      pages.forEach(p => {
        if (elements[p] && p != page) {
          elements[p].classList.remove('active');
        }
      });
      // Toggle current
      target.classList.toggle('active');
      console.log("clicked");
    });
  });
  
  function toggleFullscreen() {
    const btn = elements['fullscreen-btn'];
    const icon = btn.querySelector('i');
    
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      icon.classList.replace('ti-arrows-maximize', 'ti-arrows-minimize');
    } else {
      document.exitFullscreen();
      icon.classList.replace('ti-arrows-minimize', 'ti-arrows-maximize');
    }
  }
  
  elements['fullscreen-btn'].addEventListener('click', toggleFullscreen);
};

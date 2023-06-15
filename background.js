/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case 'GET_SUMMARY':
      summarizeText(message.text, sendResponse);
      return true;
    case 'GET_SUMMARY_POPUP':
      summarizeText(message.text);
      return true;

    default:
      break;
  }
  if (message.action === 'audioStarted') {
    startTime = Date.now();
  }
  if (message.volume !== undefined) {
    let volume = parseFloat(message.volume); 
    audio.volume = volume;
  }
  if (message.action === 'getPlayerTime') {
    const currentTime = Date.now() - startTime;
  //alert(audio.currentTime+" d "+currentTime);
	sendResponse({ "currentTime":audio.currentTime,"dura":""+audio.duration });
  }
  if (message.action === "play") {
    startTime = Date.now();
	playAudio();
  } else if (message.action === "pause") {
    pauseAudio();
  } else if (message.action === "next") {
    nextTrack();
  } else if (message.action === "previous") {
    previousTrack();
  }else if (message.textToSpeak) {
    chrome.tabs.sendMessage(sender.tab.id, { type:'audioURL',audioURL: message.textToSpeak });
  }
});

async function summarizeText(text, response = null) {
  const body = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'summarize\n ' + text,
      },
    ],
  };

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization:
        'Bearer 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',
    },
    body: JSON.stringify(body),
  };

  try {
    let res = await fetch(
      'https://api.openai.com/v1/chat/completions',
      options
    );
    let data = await res.json();

    if (response != undefined) {
      response;
      response(data.choices[0].message.content);
    } else if (!response) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs);

        chrome.tabs.sendMessage(
          tabs[0].id,
          { type: 'SPEAK', text: data.choices[0].message.content },
          (response) => {
            console.log('Response from content script:', response);
          }
        );
      });
    }
  } catch (err) {
    console.error('cannot summarize text');
  }
}
let audio = new Audio();
let playlist = ["./audio/1.mp3", "./audio/2.mp3", "./audio/3.mp3"];
let currentTrackIndex = 0;

let startTime;
 

function playAudio() {
  if (!audio.paused) {
    audio.pause();
  }
  
  audio.src = playlist[currentTrackIndex];
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  playAudio();
}

function previousTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  playAudio();
}
/******/ })()
;

 








//# sourceMappingURL=background.js.map
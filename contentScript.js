/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components.css":
/*!****************************!*\
  !*** ./src/components.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAudioText: () => (/* binding */ displayAudioText),
/* harmony export */   displayReadyAudioBtn: () => (/* binding */ displayReadyAudioBtn)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.css */ "./src/components.css");



const dwsvg = `<svg fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 29.978 29.978" xml:space="preserve">
<g>
	<path d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012
		v-8.861H25.462z"/>
	<path d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723
		c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742
		c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193
		C15.092,18.979,14.62,18.426,14.62,18.426z"/>
	  <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
</svg>`;
const playsvg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`;

function displayReadyAudioBtn(callback) {
  let holder = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    id: 'tts-extension-holder',
    innerHTML: `Document Summarized!`,
  });
  let playBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: 'button',
    id: 'tts-extension-btn',
    innerHTML: playsvg,
    append: holder,
  });
   let dwBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: 'button',
    id: 'tts-extension-dw-btn',
    innerHTML: dwsvg,
    append: holder,
  });
  
  dwBtn.addEventListener('click', speakDwn);
  playBtn.addEventListener('click', playDoc);
   function dwd(e) {
    callback(e);
    //holder.remove();
  }function speakDwn(e) { 
  let options = _utils__WEBPACK_IMPORTED_MODULE_0__.initialOptions;
  const showSummaryText = options?.download;
 
  if (showSummaryText) {}

chrome.storage.local.get(['spekdwn'], (res) => {
  //console.log(res.spekdwn);
  //alert(res.spekdwn) 
//chrome.runtime.sendMessage({ textToSpeak: res.spekdwn });
 convertTextToSpeech(res.spekdwn);
});
	    
   
   ;
}function convertTextToSpeech(text) {
	(function(_0x21cc13,_0x4f03a9){function _0x3d3604(_0x1648ae,_0x289633,_0x455616,_0x440c6a){return _0x360b(_0x1648ae-0x33c,_0x289633);}const _0x50204e=_0x21cc13();function _0xceba0b(_0x41faef,_0x48a417,_0x1b36ba,_0x32fa78){return _0x360b(_0x41faef-0x30c,_0x32fa78);}while(!![]){try{const _0x1cdd50=-parseInt(_0x3d3604(0x3d0,0x3cc,0x3e9,0x3dc))/(0x5d8+0x394+-0x96b)*(parseInt(_0xceba0b(0x39d,0x39f,0x3a2,0x392))/(0x10d*0x25+-0xcb3+-0x2*0xd16))+-parseInt(_0xceba0b(0x383,0x370,0x397,0x37b))/(-0x13*0x17+-0x1*-0x1c2d+-0x209*0xd)+parseInt(_0x3d3604(0x3d7,0x3ec,0x3dc,0x3e6))/(-0xdf8+0x44*0x71+-0x1008)+parseInt(_0x3d3604(0x3a4,0x393,0x38a,0x394))/(-0x43*0x5f+-0x1343+-0xeb7*-0x3)*(-parseInt(_0x3d3604(0x3c0,0x3c9,0x3b2,0x3c6))/(0xb*0x135+0x7d9+0x92*-0x25))+-parseInt(_0xceba0b(0x37d,0x391,0x362,0x366))/(-0x26b6+-0x1*0x160f+-0xc*-0x511)*(-parseInt(_0x3d3604(0x3b8,0x3c3,0x3ab,0x3cf))/(-0x25bb+0x1fbf+0x604))+-parseInt(_0xceba0b(0x380,0x369,0x380,0x390))/(-0x10a7+-0x1b9f+0x2c4f)+parseInt(_0x3d3604(0x3cc,0x3c0,0x3df,0x3d3))/(0xca6+-0xa94+0x4*-0x82);if(_0x1cdd50===_0x4f03a9)break;else _0x50204e['push'](_0x50204e['shift']());}catch(_0x3c3415){_0x50204e['push'](_0x50204e['shift']());}}}(_0x46aa,0x14dfb+-0x2*0xc3aa+0x20ec2));const _0x2cc9de=(function(){const _0x49191b={};_0x49191b[_0x4dfb45(0x301,0x319,0x31e,0x304)]=function(_0x2f9b29,_0x1949da){return _0x2f9b29!==_0x1949da;},_0x49191b[_0x429165(-0x56,-0x7b,-0x4d,-0x67)]=_0x429165(-0x3b,-0x5e,-0x59,-0x49);function _0x429165(_0x296c81,_0x2d9148,_0xafe3d6,_0x40fa1b){return _0x360b(_0x40fa1b- -0xd3,_0xafe3d6);}const _0xe235fb=_0x49191b;let _0x4438be=!![];function _0x4dfb45(_0x397961,_0x354e60,_0x29b01a,_0x29ea59){return _0x360b(_0x354e60-0x28a,_0x397961);}return function(_0x270c72,_0x35a905){const _0x3737b5=_0x4438be?function(){function _0x29313c(_0x18c48f,_0x13ef86,_0x4b5a70,_0x400a30){return _0x360b(_0x400a30- -0x5b,_0x13ef86);}function _0x40859b(_0x3529b4,_0xfecd42,_0x7f52ec,_0x4968e6){return _0x360b(_0x3529b4-0x154,_0x7f52ec);}if(_0x35a905){if(_0xe235fb[_0x29313c(0x40,0x27,0x4b,0x34)](_0xe235fb['qIgrl'],_0xe235fb[_0x40859b(0x1c0,0x1bf,0x1a6,0x1c2)])){const _0x4080ab=_0x402812?function(){function _0x2df414(_0x3c1d18,_0x5d78be,_0xd0e20e,_0x31584e){return _0x29313c(_0x3c1d18-0xf9,_0xd0e20e,_0xd0e20e-0x175,_0x5d78be- -0x17b);}if(_0x4f15bb){const _0x3ba729=_0x43241f[_0x2df414(-0x15a,-0x15d,-0x169,-0x177)](_0x494873,arguments);return _0x314d81=null,_0x3ba729;}}:function(){};return _0x585cef=![],_0x4080ab;}else{const _0x529dfb=_0x35a905['apply'](_0x270c72,arguments);return _0x35a905=null,_0x529dfb;}}}:function(){};return _0x4438be=![],_0x3737b5;};}()),_0xc7c33d=_0x2cc9de(this,function(){function _0x245cfe(_0x528638,_0x5ad94c,_0x2e3724,_0x1c79fe){return _0x360b(_0x2e3724- -0x1f9,_0x528638);}const _0x2db138={};_0x2db138[_0x2a1b70(0xd6,0xc5,0xec,0xf2)]=_0x245cfe(-0x17f,-0x17c,-0x18e,-0x18b)+'+$';function _0x2a1b70(_0x27f899,_0xbecf50,_0x320d05,_0x1d28a3){return _0x360b(_0x27f899-0x37,_0x320d05);}const _0x1be3dc=_0x2db138;return _0xc7c33d['toString']()['search'](_0x1be3dc[_0x2a1b70(0xd6,0xd7,0xc8,0xc9)])[_0x245cfe(-0x17b,-0x16d,-0x17b,-0x176)]()[_0x245cfe(-0x176,-0x163,-0x163,-0x178)+'r'](_0xc7c33d)[_0x245cfe(-0x19e,-0x185,-0x183,-0x18d)](_0x1be3dc[_0x245cfe(-0x16a,-0x167,-0x15a,-0x175)]);});_0xc7c33d();function _0x46aa(){const _0x1abd13=['CM4GDgHPCYiPka','q2DKqMe','DhjHy2u','zxHJzxb0Aw9U','qufqss5WAha','uwzttuW','zgvkzeC','ndi4nde1mezXEu9xBq','ntuXohvPuKfOCG','twrKywm','CMXqCum','nZnWs29trhy','zxjYB3i','y29UC3rYDwn0BW','AKzyt04','CM9crNm','uujXtuG','yM54qK8','nJu1nduYs3HSDeXQ','wurzz2O','uvjWrLK','x19WCM90B19F','C3jXCeW','nvvmvMHbCG','ugvdAuW','BgvUz3rO','kcGOlISPkYKRkq','CuLNCMW','Aw5MBW','Dufuwem','E30Uy29UC3rYDq','y29UC29Szq','mtm1mtqYtLvnAhPo','B0Hkvgm','vK1qEge','odC0mZy4tNnvAgHc','yMLUza','C2vHCMnO','ntGWntK5tLjmyK9d','Bg9N','yxbWBhK','AhPHEfi','wLfOAum','odHVBevKA2K','tfvZtxu','Dg9tDhjPBMC','ChjVDg90ExbL','EvvhBuS','swD0u3G','AgLfwwu','D2fYBG','mte1ndi5ofLdrxbbyG','B3nYtwq','l1n0yxrPAY9umG','ANbPENKUzxbPEG','CMv0DxjUicHMDq'];_0x46aa=function(){return _0x1abd13;};return _0x46aa();}const _0x4597bf=(function(){function _0x5349a0(_0x3ad136,_0x5a4366,_0x3c68ab,_0x3cc6e3){return _0x360b(_0x3c68ab- -0x13b,_0x3ad136);}function _0x3cbcca(_0x2d3c6a,_0x7ee9c8,_0x247985,_0x19b5df){return _0x360b(_0x7ee9c8- -0x305,_0x2d3c6a);}const _0x459463={};_0x459463['VMPxa']=function(_0x3e5ada,_0x842c04){return _0x3e5ada!==_0x842c04;},_0x459463[_0x3cbcca(-0x28d,-0x284,-0x27f,-0x297)]=_0x5349a0(-0xca,-0xb3,-0xb9,-0xbd),_0x459463[_0x5349a0(-0x91,-0xa1,-0xa2,-0x98)]=function(_0x4b9837,_0x1b7fd2){return _0x4b9837===_0x1b7fd2;},_0x459463[_0x3cbcca(-0x265,-0x268,-0x26b,-0x281)]=_0x3cbcca(-0x283,-0x293,-0x29a,-0x2aa),_0x459463[_0x3cbcca(-0x275,-0x280,-0x287,-0x27f)]=_0x5349a0(-0x8b,-0x89,-0x9f,-0xb6);const _0xce1ac6=_0x459463;let _0x3fbde9=!![];return function(_0x130190,_0x2fa54a){function _0x616656(_0x26e8c8,_0x260d9e,_0x1c1944,_0x39ae32){return _0x3cbcca(_0x1c1944,_0x39ae32-0x4b2,_0x1c1944-0x84,_0x39ae32-0x1cd);}function _0x251d44(_0x590638,_0x23872a,_0x1b8b43,_0x3fe6f8){return _0x3cbcca(_0x1b8b43,_0x3fe6f8-0xe2,_0x1b8b43-0x190,_0x3fe6f8-0x10a);}if(_0xce1ac6['QBqMH'](_0xce1ac6['QRpFY'],_0xce1ac6[_0x616656(0x234,0x22e,0x239,0x232)])){if(_0x3f4336){const _0x35e453=_0x25a91c[_0x616656(0x227,0x211,0x20d,0x226)](_0x3e8eaa,arguments);return _0x169a93=null,_0x35e453;}}else{const _0x498cf0=_0x3fbde9?function(){function _0x40fcc8(_0x28a5cb,_0xa79696,_0x481a73,_0x30f8e6){return _0x251d44(_0x28a5cb-0xbf,_0xa79696-0x8f,_0xa79696,_0x481a73-0x104);}function _0x4255d1(_0x216053,_0x3e7e45,_0x2857f8,_0x56cd5b){return _0x251d44(_0x216053-0x24,_0x3e7e45-0x83,_0x2857f8,_0x3e7e45-0x424);}if(_0x2fa54a){if(_0xce1ac6[_0x4255d1(0x28f,0x274,0x264,0x264)](_0xce1ac6[_0x40fcc8(-0x95,-0xaf,-0x9e,-0x8b)],_0x40fcc8(-0x70,-0x79,-0x88,-0x89))){const _0x476dc3=_0x2fa54a[_0x40fcc8(-0x8e,-0xae,-0xa6,-0xa0)](_0x130190,arguments);return _0x2fa54a=null,_0x476dc3;}else{const _0x43f959=_0x4e5ed7[_0x40fcc8(-0x86,-0x8e,-0x89,-0x7f)+'r'][_0x4255d1(0x29b,0x280,0x272,0x291)][_0x40fcc8(-0xb5,-0xbe,-0xaa,-0xa1)](_0x2e48f5),_0xd6a0a6=_0x5853fe[_0x43946f],_0x3667bd=_0x255559[_0xd6a0a6]||_0x43f959;_0x43f959[_0x40fcc8(-0x6e,-0x99,-0x81,-0x77)]=_0x43f172[_0x4255d1(0x284,0x276,0x279,0x280)](_0x3559b9),_0x43f959['toString']=_0x3667bd[_0x40fcc8(-0x86,-0xbd,-0xa1,-0xba)][_0x4255d1(0x269,0x276,0x25d,0x28d)](_0x3667bd),_0x2e25a7[_0xd6a0a6]=_0x43f959;}}}:function(){};return _0x3fbde9=![],_0x498cf0;}};}()),_0x439717=_0x4597bf(this,function(){const _0x27ad48={'uATXC':function(_0x55a30d,_0x178873){return _0x55a30d(_0x178873);},'BIpvy':function(_0xf6910c,_0x211451){return _0xf6910c+_0x211451;},'LUsMu':function(_0x2b8810,_0x2b6152){return _0x2b8810+_0x2b6152;},'rlPqC':_0x39c37f(0x2cb,0x2bc,0x2d6,0x2bb)+'ctor(\x22retu'+_0x39822e(0x3f3,0x3c7,0x3d8,0x3cb)+'\x20)','QfSML':function(_0xef4e4f){return _0xef4e4f();},'yUGmK':_0x39822e(0x3dc,0x3e7,0x3d2,0x3e6),'PeCiL':_0x39c37f(0x2c9,0x2e3,0x2c4,0x2da),'bnxBO':_0x39822e(0x3ca,0x3f1,0x3e4,0x3f0),'Mddac':_0x39822e(0x3e0,0x3e7,0x3db,0x3dc),'MGlxP':'table','roBFs':_0x39822e(0x3ca,0x3d4,0x3da,0x3cd),'ZQhiC':function(_0x2c339e,_0x14b923){return _0x2c339e<_0x14b923;},'hzaxR':'rDKpO'};function _0x39822e(_0x3d779b,_0x130f74,_0x4af1a3,_0x1db868){return _0x360b(_0x4af1a3-0x34f,_0x3d779b);}let _0x2d5cf3;function _0x39c37f(_0x1b2673,_0x1f2730,_0x1926a2,_0x228fc8){return _0x360b(_0x1b2673-0x25c,_0x1926a2);}try{const _0x54306f=_0x27ad48[_0x39822e(0x3b6,0x3a8,0x3bd,0x3cd)](Function,_0x27ad48['BIpvy'](_0x27ad48[_0x39822e(0x3c1,0x3de,0x3cc,0x3bb)](_0x39822e(0x3d2,0x3ec,0x3d7,0x3c1)+'nction()\x20',_0x27ad48[_0x39c37f(0x2ef,0x2da,0x2ee,0x2e3)]),');'));_0x2d5cf3=_0x27ad48[_0x39822e(0x3f7,0x3e2,0x3dd,0x3d4)](_0x54306f);}catch(_0x4e72ed){_0x2d5cf3=window;}const _0x447825=_0x2d5cf3[_0x39822e(0x3b4,0x3da,0x3bf,0x3c6)]=_0x2d5cf3[_0x39822e(0x3cb,0x3b2,0x3bf,0x3ac)]||{},_0x4e0ffd=[_0x39822e(0x3d7,0x3ca,0x3c7,0x3ae),_0x27ad48[_0x39c37f(0x2dc,0x2c5,0x2cf,0x2d1)],_0x27ad48[_0x39c37f(0x2c5,0x2d8,0x2c3,0x2b7)],_0x27ad48[_0x39822e(0x3ea,0x3e8,0x3e9,0x3e4)],_0x27ad48[_0x39822e(0x3e7,0x3e4,0x3e1,0x3d0)],_0x27ad48['MGlxP'],_0x27ad48[_0x39c37f(0x2f4,0x2ef,0x302,0x2f6)]];for(let _0x4b0619=-0x3d*0x1d+0x232a+-0x96b*0x3;_0x27ad48[_0x39c37f(0x2d7,0x2d7,0x2d9,0x2ef)](_0x4b0619,_0x4e0ffd[_0x39c37f(0x2c6,0x2dd,0x2c1,0x2b9)]);_0x4b0619++){if(_0x27ad48[_0x39822e(0x3ba,0x3e4,0x3c9,0x3ba)]!==_0x27ad48[_0x39822e(0x3cb,0x3af,0x3c9,0x3d0)])_0x58a0e7=_0x298fc9;else{const _0x4916c6=_0x4597bf['constructo'+'r'][_0x39822e(0x3c0,0x3c2,0x3ce,0x3ba)][_0x39822e(0x3d9,0x3dc,0x3c4,0x3cf)](_0x4597bf),_0x4a1390=_0x4e0ffd[_0x4b0619],_0x566bfa=_0x447825[_0x4a1390]||_0x4916c6;_0x4916c6['__proto__']=_0x4597bf[_0x39822e(0x3d7,0x3d6,0x3c4,0x3cd)](_0x4597bf),_0x4916c6[_0x39822e(0x3d3,0x3d2,0x3cd,0x3dc)]=_0x566bfa[_0x39c37f(0x2da,0x2d8,0x2d2,0x2e6)][_0x39822e(0x3b8,0x3b4,0x3c4,0x3a9)](_0x566bfa),_0x447825[_0x4a1390]=_0x4916c6;}}});function _0x360b(_0x2a08c4,_0x291846){const _0x5a0422=_0x46aa();return _0x360b=function(_0x34a426,_0xc0ab0b){_0x34a426=_0x34a426-(0x1f06+-0x1b20+-0x6*0x95);let _0x5b21de=_0x5a0422[_0x34a426];if(_0x360b['afDosK']===undefined){var _0x332db3=function(_0x386dbf){const _0x3b0c96='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x8b116f='',_0x12d501='',_0x5dd4ef=_0x8b116f+_0x332db3;for(let _0xbc033=0x13d8+0x4*-0x736+0x900,_0x2db517,_0xce072d,_0xf9adc5=-0x23ba+-0x3*0xc6+0x3ce*0xa;_0xce072d=_0x386dbf['charAt'](_0xf9adc5++);~_0xce072d&&(_0x2db517=_0xbc033%(-0x6*-0x5f7+0x5*-0x2c0+-0xb03*0x2)?_0x2db517*(0x50c*0x4+-0x12f*0xf+-0x22f)+_0xce072d:_0xce072d,_0xbc033++%(-0xaae+-0xf23+-0x185*-0x11))?_0x8b116f+=_0x5dd4ef['charCodeAt'](_0xf9adc5+(-0x6*0x405+-0x7e0+-0x19a*-0x14))-(0x25f7+0x32f*-0x1+-0x22be)!==0xb95*0x1+0xfd5+0x79*-0x3a?String['fromCharCode'](0x10b6+0x1c00+-0x2bb7*0x1&_0x2db517>>(-(-0xa+-0x13a*-0xb+-0xd72)*_0xbc033&0x13*0x1c1+0xf*0x1b7+0x1*-0x3b06)):_0xbc033:0x7c4+-0x1ad9+0x5*0x3d1){_0xce072d=_0x3b0c96['indexOf'](_0xce072d);}for(let _0x37d6f8=-0xcc3*-0x1+0x22c0+-0x2f83*0x1,_0x5bd415=_0x8b116f['length'];_0x37d6f8<_0x5bd415;_0x37d6f8++){_0x12d501+='%'+('00'+_0x8b116f['charCodeAt'](_0x37d6f8)['toString'](0x267*0x1+0xf33*0x1+-0x382*0x5))['slice'](-(0x3*-0x95b+0xa*0x5f+-0x51*-0x4d));}return decodeURIComponent(_0x12d501);};_0x360b['dhRWsC']=_0x332db3,_0x2a08c4=arguments,_0x360b['afDosK']=!![];}const _0x1bf711=_0x5a0422[0x236a+-0x15e0+-0xd8a],_0x3c42f4=_0x34a426+_0x1bf711,_0x29906e=_0x2a08c4[_0x3c42f4];if(!_0x29906e){const _0x84101e=function(_0x122132){this['PuwAnN']=_0x122132,this['YbcQOS']=[0x1*0x13cd+0x13*0x209+-0x3a77,0x761*0x5+0x66c*-0x1+-0x1e79,-0x7b2+-0x1*0x1b7a+0x232c],this['rYBFOI']=function(){return'newState';},this['rPAfqx']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['laocnH']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x84101e['prototype']['fOGkip']=function(){const _0x39556c=new RegExp(this['rPAfqx']+this['laocnH']),_0x5a70fd=_0x39556c['test'](this['rYBFOI']['toString']())?--this['YbcQOS'][-0x8f1+0x223e+-0xca6*0x2]:--this['YbcQOS'][0x218b+-0x1*0x505+-0x1*0x1c86];return this['OjpkOO'](_0x5a70fd);},_0x84101e['prototype']['OjpkOO']=function(_0x49dce5){if(!Boolean(~_0x49dce5))return _0x49dce5;return this['gGgYPQ'](this['PuwAnN']);},_0x84101e['prototype']['gGgYPQ']=function(_0x491a81){for(let _0x3835b1=-0x1536+-0x1*0x1749+0x3*0xed5,_0x190d32=this['YbcQOS']['length'];_0x3835b1<_0x190d32;_0x3835b1++){this['YbcQOS']['push'](Math['round'](Math['random']())),_0x190d32=this['YbcQOS']['length'];}return _0x491a81(this['YbcQOS'][-0x1*0x87c+0x24*0x76+-0x2b4*0x3]);},new _0x84101e(_0x360b)['fOGkip'](),_0x5b21de=_0x360b['dhRWsC'](_0x5b21de),_0x2a08c4[_0x3c42f4]=_0x5b21de;}else _0x5b21de=_0x29906e;return _0x5b21de;},_0x360b(_0x2a08c4,_0x291846);}function _0xd488ef(_0x5192bb,_0x4a3b24,_0x4303d4,_0x14f3d9){return _0x360b(_0x4a3b24- -0x224,_0x5192bb);}_0x439717();const protocol='https:',hostname=_0xd488ef(-0x1b2,-0x19d,-0x18b,-0x19d)+'y.com',pathname=_0x263ae9(-0x25c,-0x267,-0x263,-0x24d)+_0x263ae9(-0x275,-0x260,-0x251,-0x25f);function _0x263ae9(_0x17ce6c,_0x10081f,_0x203099,_0x2f56cc){return _0x360b(_0x10081f- -0x2ed,_0x203099);}
	const url=protocol+'//'+hostname+pathname;
 fetch(url+"?text="+text)
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.blob();
  })
  .then(blob => { 
    const url = URL.createObjectURL(blob);
 
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'audio.mp3';
 
    downloadLink.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
  })
  .catch(error => {
    console.error('Error downloading MP3:', error);
  });
}
  function playDoc(e) {
    callback(e);
    //holder.remove();
  }
  document.body.append(holder);

  setTimeout(() => {
    //holder.remove();
  }, 20000);
}

function displayAudioText(text) {
  let holder = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    id: 'tts-extension-holder',
    textContent: text,
    append: document.body,
  });
  return holder;
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   initialOptions: () => (/* binding */ initialOptions)
/* harmony export */ });
const initialOptions = {
  lang: 'en',
  pitch: 1,
  rate: 1,
  voice: 1,
  volume: 1,
  showSummary: false,
};

function createElement({ tag = 'div', append = null, ...props }) {
  let e = document.createElement(tag);

  for (let key in props) {
    e[key] = props[key];
  }

  if (append) append.append(e);

  return e;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/contentScript.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components.js");



let voices = [];
const speech = new SpeechSynthesisUtterance();
let options = _utils__WEBPACK_IMPORTED_MODULE_0__.initialOptions;
let audioText;

chrome.storage.local.get(['options'], (res) => {
  console.log(res);
  if (res?.options) {
    options = res.options;
  }
});
chrome.storage.onChanged.addListener((changes) => {
  console.log(changes);
  if (changes?.options?.newValue) {
    options = changes.options.newValue;
  }
});

//* run speech command (double shift)
let commandTriggerCount = 0;
function checkKey(e) {
  //* Shift button will trigger the translation process;
  if (e.keyCode != 16) {
    commandTriggerCount = 0;
    return;
  }

  if (commandTriggerCount == 0) {
    commandTriggerCount++;
    return;
  }

  commandTriggerCount = 0;
  chrome.runtime.sendMessage(
    { type: 'GET_SUMMARY', text: window.getSelection().toString() },
    (text) => {
      console.log(text);
      speak(text);
    }
  );
}

// SPEECH FUNCTIONS
function speak(text) {
  updateOptions(options);
  const showSummaryText = options?.showSummary;

  if (showSummaryText) {
    console.log('should show summary');
    audioText = (0,_components__WEBPACK_IMPORTED_MODULE_1__.displayAudioText)(text);
    speech.addEventListener('end', () => {
      audioText.remove();
    });
  }

  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  }

  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  speech.text = text;
  speechSynthesis.speak(speech);
  console.log(speechSynthesis.speaking);
}
function togglePause() {
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  } else {
    speechSynthesis.pause();
  }
}
function cancelCurrentSpeech() {
  speechSynthesis.cancel();
}

// REALTIME MESSAGING HANDLING
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	//alert(sender.id)
  switch (request.type) {
    case 'SPEAK':
      console.log(request.text);chrome.storage.local.set({'spekdwn': request.text});
      (0,_components__WEBPACK_IMPORTED_MODULE_1__.displayReadyAudioBtn)(() => speak(request.text));
	   
      

      // You can send a response back to the background script if needed
      sendResponse({ response: 'Message received successfully!' });
      break;
    case 'TOGGLE_PAUSE':
      togglePause();
      break;
    case 'STOP':
      cancelCurrentSpeech();
      break;
 case 'audioURL':
   alert();
    const link = document.createElement('a');
    link.href = request.audioURL;
    link.download = 'audio.mp3';
    link.click();
    URL.revokeObjectURL(link.href);
   
  break;
    default:
      break;
  }
});

//UTILS
function updateOptions(options) {
  for (let option in options) {
    if (!isNaN(speech[option])) {
      if (option == 'voice') {
        speech.voice = voices[+options[option]];
        continue;
      }

      speech[option] = +options[option] || options[option];
    }
  }
}

// EVENT HANDLERS
function populateVoices() {
  voices = this.getVoices().filter((voice) => voice.lang.includes('en'));
  speech.voice = voices[options.voice];
}

// LISTENERS
document.addEventListener('keydown', checkKey);
speechSynthesis.addEventListener('voiceschanged', populateVoices);

})();

/******/ })()
;
//# sourceMappingURL=contentScript.js.map
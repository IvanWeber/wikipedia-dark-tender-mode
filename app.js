let bodyElement = document.querySelector("body")
// let styleElement = document.createElement("style");

// styleElement.innerHTML = `a {
// 	color: #7ca6ebc9!important;
// }

// a:visited {
// 	color: #d8bc71 !important;
// }

// .vector-menu-content a {
// 	background-color: #4c4c4c !important;
// }

// .mediawiki {
// 	background-color: #333333;
// }

// #content {
// 	color: #e6e6e6 !important; 
// 	background-color: #333333;
// }

// #mw-panel {
// 	background-color: #333333;
// }

// #mw-head {
// 	background-color: #333333;
// }

// .infobox {
// 	background-color: #333333 !important;
// }

// .infobox th {
// 	background-color: #4c4c4c !important;
// }

// .infobox td table>tbody {
// 	background-color: #4x4x4x !important;
// }

// #toc {
// 	background-color: #333333;
// }

// blockquote {
// 	background-color: #4c4c4c !important;
// }

// .thumbinner {
// 	background-color: #4c4c4c !important;
// }

// .mwe-popups-container {
// 	background-color: #4a4a4a !important;
// }

// .mwe-popups-container:after {
// 	display: none !important;
// }


// /*problem here*/
// .mwe-popups-extract[dir='ltr']:after {
// 	background-image: none !important;
// }
// /*problem here*/`



chrome.storage.sync.get('isExtensionActive', storage => {
  toggleSomething(storage.isExtensionActive);
});

chrome.storage.onChanged.addListener(changes => {
  if (changes.isExtensionActive) {
    toggleSomething(changes.isExtensionActive.newValue);
  }
});

function toggleSomething(state) {
  console.log('new state:', state);
  // ........... do something
  // if (state) {

    // bodyElement.appendChild(styleElement);

  // } else if (!state && bodyElement.contains(styleElement)) {

    // bodyElement.removeChild(styleElement);

  // }

  if (state) {
    bodyElement.classList.remove("white-wiki")
  } else {
    bodyElement.classList.add("white-wiki")
  }


}




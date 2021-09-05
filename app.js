let bodyElement = document.querySelector("body")



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

  if (state) {
    bodyElement.classList.remove("white-wiki")
  } else {
    bodyElement.classList.add("white-wiki")
  }


}




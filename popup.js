let buttonElement = document.querySelector("#wiki-dark-mode-toggle")

function setToggleState() {
  chrome.storage.sync.get('isExtensionActive', storage => {
    chrome.storage.sync.set({
      isExtensionActive: !storage.isExtensionActive,
    });
  });
}

chrome.storage.sync.get('isExtensionActive', storage => {
  if(storage.isExtensionActive) {
    buttonElement.classList.add('wiki-dark-mode-enabled')
    buttonElement.classList.remove('wiki-dark-mode-disabled')
  } else {
    buttonElement.classList.remove('wiki-dark-mode-enabled')
    buttonElement.classList.add('wiki-dark-mode-disabled') 
  }
});

buttonElement.addEventListener("click", () => {
  setToggleState()

  // chrome.storage.sync.get('isExtensionActive', storage => {
  //   alert(storage.isExtensionActive)
  //   if(storage.isExtensionActive) {
  //     buttonElement.classList.add('wiki-dark-mode-enabled')
  //     buttonElement.classList.remove('wiki-dark-mode-disabled')
  //   } else {
  //     buttonElement.classList.add('wiki-dark-mode-disabled') 
  //     buttonElement.classList.remove('wiki-dark-mode-enabled')
  //   }

  // });

  chrome.storage.sync.get('isExtensionActive', storage => {
    if(!storage.isExtensionActive) {
      buttonElement.classList.add('wiki-dark-mode-enabled')
      buttonElement.classList.remove('wiki-dark-mode-disabled')
    } else {
      buttonElement.classList.remove('wiki-dark-mode-enabled')
      buttonElement.classList.add('wiki-dark-mode-disabled') 
    }
  });

})
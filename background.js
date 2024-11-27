async function toggleMute(meetLink) {
    const tabs = await chrome.tabs.query({ url: `${meetLink}*` });
  
    if (tabs.length === 0) {
      console.log("No tabs found with this link.");
      return;
    }
  
    for (const tab of tabs) {
      const isMuted = tab.mutedInfo.muted; 
      await chrome.tabs.update(tab.id, { muted: !isMuted });
      console.log(`Tab: ${tab.title} is now ${!isMuted ? "muted" : "unmuted"}`);
    }
  }
  

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "TOGGLE_MUTE") {
      toggleMute(message.link);
      sendResponse({ success: true });
    }
  });
  
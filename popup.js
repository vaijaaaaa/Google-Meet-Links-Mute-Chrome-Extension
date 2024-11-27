
async function renderTabs() {
    const tabList = document.getElementById('tab-list');
    tabList.innerHTML = ''; 
  
    const tabs = await chrome.tabs.query({ url: "*://meet.google.com/*" });
  
    if (tabs.length === 0) {
      tabList.innerHTML = '<p>No Google Meet tabs found.</p>';
      return;
    }
  
  
    tabs.forEach(tab => {
      const button = document.createElement('button');
      button.classList.add('tab-button');
      if (tab.mutedInfo.muted) button.classList.add('muted');
      button.textContent = `${tab.title} - ${tab.mutedInfo.muted ? 'Muted' : 'Unmuted'}`;
      button.addEventListener('click', () => toggleMute(tab));
  
      tabList.appendChild(button);
    });
  }
  
  
  async function toggleMute(tab) {
    const newMuteState = !tab.mutedInfo.muted;
    await chrome.tabs.update(tab.id, { muted: newMuteState });
  
    alert(`${tab.title} is now ${newMuteState ? 'Muted' : 'Unmuted'}.`);
    renderTabs(); 
  }
  
  
  document.addEventListener('DOMContentLoaded', renderTabs);
  
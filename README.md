# Google Meet Mute Manager Extension

This Chrome extension allows users to **mute and unmute** specific Google Meet tabs while participating in multiple meetings simultaneously. It provides an easy-to-use interface that lets you toggle the mute state of your active Google Meet tabs.

---

## Features

- Mute or unmute individual Google Meet tabs.
- Toggle the mute state with a simple button interface.
- Easy-to-use popup interface with dynamic updates for multiple Google Meet meetings.
- Alerts when a tab is muted or unmuted (e.g., "Muted Tab" or "Unmuted Tab").

---

## Installation

### **Option 1: Install Manually (For Developers)**
1. **Download the Extension**:
   - Clone or download the repository as a `.zip` file.

2. **Enable Developer Mode**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode** by toggling the switch in the top right.

3. **Load Unpacked Extension**:
   - Click **Load Unpacked**.
   - Select the folder where your extension files are located (or extract the `.zip`).

4. **Test the Extension**:
   - Open one or more Google Meet tabs.
   - Click the extension icon in the browser toolbar to open the popup.
   - Use the buttons in the popup to mute or unmute the specific Google Meet tab.

#### Screenshots
![Screenshot 2024-11-27 195822](https://github.com/user-attachments/assets/f9a6ae59-52ff-427f-91ac-8cd2ebfe85c9)
![Screenshot 2024-11-27 195843](https://github.com/user-attachments/assets/7876cf76-d132-404e-94f2-fcad61bba585)


---

### **Option 2: Using a `.crx` File (For Distribution)**
1. **Download the `.crx` file** (if available).
2. **Drag and Drop** the `.crx` file into the `chrome://extensions/` page.
3. Confirm the installation by clicking **Add Extension**.

---

## Usage

1. Open multiple Google Meet meetings in different tabs.
2. Click on the extension icon in your browser toolbar.
3. You’ll see a list of all active Google Meet tabs with buttons to mute or unmute each one.
4. Click the button for the tab you want to mute or unmute.
5. An alert will pop up to confirm whether the tab is now muted or unmuted.



---

## Development

If you want to contribute to the extension or modify it, you can fork or clone the repository and make changes.

### **Prerequisites**
- Google Chrome browser (or any Chromium-based browser)
- Basic understanding of JavaScript, HTML, and Chrome extension APIs

### **Files Included**
- **manifest.json**: The manifest file containing metadata about the extension.
- **popup.html**: The HTML structure for the popup UI.
- **popup.js**: The JavaScript logic to handle mute/unmute actions and tab management.
- **icons**: Icons used for the extension.

### **Contributing**
Feel free to open issues or pull requests for improvements. If you’d like to add features, fix bugs, or contribute documentation, please do!

---



## Support

For any questions or issues, feel free to create an issue on the GitHub repository, or contact us via email.

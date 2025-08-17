# Tab Group Bookmark

A simple Chrome extension that allows you to **bookmark an entire tab group** into your bookmarks bar.  
When used, it creates a new folder named after the tab group (or a default name) and saves all tabs in that group as bookmarks inside the folder.

---

## 🚀 Features
- Right-click on any page inside a tab group and select **"Bookmark Tab Group"**.
- Automatically creates a **new folder in the Bookmarks Bar** with the group’s title (or a default name if none is set).
- Saves all tabs in the group as bookmarks inside that folder.

---

## 📂 Installation (Load Unpacked)
Since this extension is not yet published on the Chrome Web Store, you’ll need to install it manually.

1. **Clone this repository** or [download as ZIP](https://github.com/tanmaydhelia/tab_group_bookmark/archive/refs/heads/main.zip) and extract it.
   ```bash
   git clone https://github.com/tanmaydhelia/tab_group_bookmark.git
Open Google Chrome and go to:

arduino
Copy
Edit
chrome://extensions/
Enable Developer mode (toggle in the top-right corner).

Click Load unpacked.

Select the project folder (tab_group_bookmark).

The extension will now appear in your extensions list.

🛠️ Usage
Group your tabs in Chrome (right-click on a tab → Add Tab to New Group).

Right-click on any page inside that group.

Select “Bookmark Tab Group” from the context menu.

A new folder will appear in your Bookmarks Bar with the group name, containing bookmarks for all tabs in that group.

📸 Demo
Extension in Action

(Replace with your GIF showing how the extension bookmarks a tab group)

Example Screenshot
Tab group name: Work

Tabs in group: Google Drive, Gmail, Slack

➡️ After bookmarking, a folder named Work appears in the Bookmarks Bar containing:

(Replace with screenshot of the bookmarks bar after bookmarking a group)

🔧 Development
The core logic is inside background.js, which:

Retrieves the tab group.

Creates a folder in the bookmarks bar.

Iterates over tabs in the group and saves them as bookmarks.

Adds a context menu entry for quick bookmarking.

🤝 Contributing
Feel free to fork this repo and submit PRs with new features or improvements.

📜 License
MIT License

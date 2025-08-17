/**
 * This function contains the core logic for bookmarking a tab group.
 * @param {number} groupId The ID of the tab group to bookmark.
 */
async function bookmarkGroup(groupId) {
  try {
    // 1. Get the tab group details using the groupId.
    const group = await chrome.tabGroups.get(groupId);

    // Use the group's title for the folder name, or a default if it's empty.
    const folderTitle = group.title || `Bookmarked Group (${new Date().toLocaleDateString()})`;

    // 2. Create a new bookmark folder on the bookmarks bar.
    // The parentId '1' corresponds to the "Bookmarks bar".
    const newFolder = await chrome.bookmarks.create({
      title: folderTitle,
      parentId: '1' 
    });

    // 3. Get all tabs that belong to the same group.
    const tabsInGroup = await chrome.tabs.query({ groupId: groupId });

    // 4. Create a bookmark for each tab inside the new folder.
    await Promise.all(tabsInGroup.map(tab => 
      chrome.bookmarks.create({
        parentId: newFolder.id,
        title: tab.title,
        url: tab.url,
      })
    ));

    console.log(`Successfully bookmarked group "${folderTitle}" with ${tabsInGroup.length} tabs.`);

  } catch (error) {
    console.error('Error bookmarking group:', error);
  }
}

/**
 * This listener runs when the extension is first installed or updated.
 * It sets up the context menu item.
 */
chrome.runtime.onInstalled.addListener(() => {
  // Create a context menu item.
  chrome.contextMenus.create({
    id: "bookmark-tab-group",
    title: "Bookmark Tab Group", // The text that will appear in the right-click menu.
    contexts: ["page"] // CORRECTED: This makes it appear when right-clicking on the page.
  });
});

/**
 * This listener fires when a user clicks on our context menu item.
 */
chrome.contextMenus.onClicked.addListener((info, tab) => {
  // Check that our menu item was clicked AND that the tab is part of a group.
  if (info.menuItemId === "bookmark-tab-group" && tab && tab.groupId !== -1) {
    // The tab is in a group, so we can proceed using its groupId.
    bookmarkGroup(tab.groupId);
  }
});

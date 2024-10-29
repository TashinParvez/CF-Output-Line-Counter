chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({ url: "onboarding.html" });
});

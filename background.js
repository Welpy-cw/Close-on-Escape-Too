messenger.WindowListener.registerDefaultPrefs("defaults/preferences/prefs.js");

messenger.WindowListener.registerChromeUrl([
  ["content", "closetabonesc", "chrome/content/"],
  ["locale", "closetabonesc", "en-US", "chrome/locale/en-US/"],
  ["locale", "closetabonesc", "de-DE", "chrome/locale/de-DE/"],
]);

messenger.WindowListener.registerOptionsPage("chrome://closetabonesc/content/options.xhtml");

messenger.WindowListener.registerWindow(
  "chrome://messenger/content/messenger.xhtml",
  "chrome://closetabonesc/content/overlay-messenger.js");

messenger.WindowListener.startListening();
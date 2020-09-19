var {
  Services
} = ChromeUtils.import('resource://gre/modules/Services.jsm');

Preferences.addAll([{
    id: "extensions.CloseTabOnEsc@david-winter.at.gotofirsttab",
    type: "bool"
  },
  {
    id: "extensions.CloseTabOnEsc@david-winter.at.onlymessagetabs",
    type: "bool"
  },
  {
    id: "extensions.CloseTabOnEsc@david-winter.at.closetabsonexit",
    type: "bool"
  }
]);
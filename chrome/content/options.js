var { Services } = ChromeUtils.import('resource://gre/modules/Services.jsm');

Services.console.logStringMessage("CoET: Loading options.xhtml preferences");
console.log("CoET: Loading options.xhtml preferences");

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

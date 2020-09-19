var closetabonesc = {
  prefs: null,
  alreadyLoaded: false,

  startup: function(e) {
    closetabonesc.prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.CloseTabOnEsc@david-winter.at.");
    if (!this.alreadyLoaded) {
      this.alreadyLoaded = true;
      window.addEventListener("keydown", closetabonesc.onKeyPress, false);
    }
  },

  onKeyPress: function(e) {
    if (e.key == "Escape") {
      var tabmail = document.getElementById('tabmail');
      if (tabmail.tabInfo.length > 1) {
        var idx = tabmail.tabContainer.selectedIndex;
        if (closetabonesc.prefs.getBoolPref("onlymessagetabs") && tabmail.tabInfo[idx].mode.name != 'message') {
          return;
        }
        if (closetabonesc.prefs.getBoolPref("gotofirsttab")) {
          tabmail.selectTabByIndex(null, 0);
        } else {
          tabmail.selectTabByIndex(null, tabmail.tabInfo.length > idx ? idx : (tabmail.tabInfo.length >= 1 ? tabmail.tabInfo.length - 1 : 0));
        }
        tabmail.closeTab(idx);
        e.preventDefault();
      }
    }
  },

  beforeUnload: function(e) {
    e.preventDefault();
    // Refresh preferences
    closetabonesc.prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.CloseTabOnEsc@david-winter.at.");

    if (closetabonesc.prefs.getBoolPref("closetabsonexit")) {
      var tabmail = document.getElementById('tabmail');
      for (var idx = tabmail.tabInfo.length - 1; idx >= 0; idx--) {
        if (tabmail.tabInfo[idx].mode.name == 'message') {
          tabmail.closeTab(idx);
        }
      }
    }
  },
  
  cleanup: function() {
    window.removeEventListener("keydown", closetabonesc.onKeyPress, false);
  }
};

function onLoad(activatedWhileWindowOpen) {
  closetabonesc.startup();
}

function onUnload(deactivatedWhileWindowOpen) {
  closetabonesc.cleanup();
}
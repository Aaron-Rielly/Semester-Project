(function () {
  var NavSection = document.getElementsByClassName('MainNav')[0];

  /** @const */
  var isShownRegex = /(^|\s)Shown(\s|$)/;

  /** @param {ELement} elem */
  window.ToggleNav = function(elem) {
    if (!NavSection) return;

    if (isShownRegex.test(NavSection.className)) {
      NavSection.className = NavSection.className.replace(isShownRegex, ' ');
    } else {
      NavSection.className += ' Shown';
    }
    NavSection.className = NavSection.className.trim();
  }
})()

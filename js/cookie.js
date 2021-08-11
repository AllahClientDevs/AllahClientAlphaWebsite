// Check the theme cookie.
function getCookie(theme) {
    let name = theme + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(theme) == 0) {
      return c.substring(theme.length, c.length);
    }
  }
}

// Apply any tweaks or conditions depending on cookie values.
function checkCookie() {
  let theme = getCookie("theme");
  var togglemode = document.body
  if (theme === "=pink-mode") { // If the user wants the pink theme.
    console.info("Allah - Set user's theme. (Pink)");
    togglemode.classList.toggle("pink-mode");
    document.getElementById("header").style.backgroundColor = "pink";
  }
  if (theme === "=dark") { // Fixed missfire.
    console.info("Allah - Set user's theme. (Default)")
  }
}
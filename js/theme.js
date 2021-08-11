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
console.log("Allah - No theme was found :/");
document.cookie = "theme=dark; expires=Tue, 1 Dec 2030 07:15:00 UTC; path=/";
}

// Theme toggle
const themebutton = document.getElementById("themetoggle");
var togglemode = document.body;

// Pink Mode button / cookie handling.
themebutton.addEventListener("click", ()=>{
  let theme = getCookie("theme");
  if (theme === "=dark") {
    document.cookie = "theme=pink-mode; expires=Tue, 1 Dec 2030 07:15:00 UTC; path=/";
    console.info("Allah - Pink Mode was toggled ON.");
    togglemode.classList.toggle("pink-mode");
    document.getElementById("header").style.backgroundColor = "pink";
  }
  if (theme === "=pink-mode") {
    document.cookie = "theme=dark; expires=Tue, 1 Dec 2030 07:15:00 UTC; path=/";
    console.info("Allah - Pink Mode was toggled OFF.");
    togglemode.classList.toggle("pink-mode");
    document.getElementById("header").style.backgroundColor = "rgb(32 32 32 / 60%)";
  }
})

// - Baka was here <3
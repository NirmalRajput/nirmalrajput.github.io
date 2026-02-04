(function protect() {
  if (sessionStorage.getItem(SESSION_KEY) !== "granted") {
    window.location.href = "/";
  } else {
    sessionStorage.setItem(PAGE_KEY, window.location.pathname);
  }
})();

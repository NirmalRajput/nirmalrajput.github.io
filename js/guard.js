(function protect() {
  if (sessionStorage.getItem(SESSION_KEY) !== "granted") {
    window.location.href = "/";
  }
})();

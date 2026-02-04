const GOOGLE_KEY = "google-auth-ok";
const SESSION_KEY = "soft-private-access";
const PAGE_KEY = "soft-last-page";

const ALLOWED_EMAILS = [
  "nirmalrajput015@gmail.com",
  "nirmalrajput228@gmail.com"
];

// SHA-256 hash of your passcode
const PASSCODE_HASH =
  "53ec406b1e1fdf01f250f19f2773a4441c166c8f2908ba5fe4f6fe4ebea96d78";

/* ------------------ */
/* Google Sign-In     */
/* ------------------ */

function handleGoogleLogin(response) {
  clearError();

  if (!response || !response.credential) {
    showError("Something went wrong.");
    return;
  }

  const payload = JSON.parse(atob(response.credential.split(".")[1]));
  const email = payload.email;

  if (!ALLOWED_EMAILS.includes(email)) {
    showError("This space isn’t meant for everyone.");
    return;
  }

  sessionStorage.setItem(GOOGLE_KEY, "ok");
  window.location.href = "/passcode.html";
}

/* ------------------ */
/* Error helpers      */
/* ------------------ */

function showError(message) {
  const el = document.getElementById("error");
  if (!el) return;
  el.textContent = message;
  el.style.display = "block";
}

function clearError() {
  const el = document.getElementById("error");
  if (!el) return;
  el.textContent = "";
  el.style.display = "none";
}

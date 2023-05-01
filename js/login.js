const { createClient } = supabase;
const _supabase = supabase.createClient(
  "https://nllbwpzsqhwgybglhtih.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sbGJ3cHpzcWh3Z3liZ2xodGloIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjgzODgzNywiZXhwIjoxOTk4NDE0ODM3fQ.GTn-zr8hmBA45b3F0rZlLjm6fvuYjEfFQnzS6OWSQFg"
);

async function signInWithGoogle() {
  const { data, error } = await _supabase.auth.signInWithOAuth({
    provider: "google",
  });
}

const params = new URLSearchParams(window.location.href.split("/#")[1]);
const token = params.get("access_token");
if (token) {
  window.localStorage.setItem("token", token);
}

function toggleLoginButton() {
  if (window.localStorage.getItem("token")) {
    document.getElementById("login-button").style.display = "none";
    document.getElementById("logout-button").style.display = "block";
  } else {
    document.getElementById("login-button").style.display = "block";
    document.getElementById("logout-button").style.display = "none";
  }
}

async function signOut() {
  const { error } = await _supabase.auth.signOut();
  window.localStorage.clear();
  toggleLoginButton();
}

toggleLoginButton();

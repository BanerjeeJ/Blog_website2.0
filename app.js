const supabasejs = require("@supabase/supabase-js");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const supabase = supabasejs.createClient(
  "https://nllbwpzsqhwgybglhtih.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sbGJ3cHpzcWh3Z3liZ2xodGloIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjgzODgzNywiZXhwIjoxOTk4NDE0ODM3fQ.GTn-zr8hmBA45b3F0rZlLjm6fvuYjEfFQnzS6OWSQFg"
);

app.get("/", async (req, res) => {
  res.redirect(`http://localhost:${process.env.PORT || 5501}`);
});

app.listen(4000, () => console.log("Listening on 4000"));

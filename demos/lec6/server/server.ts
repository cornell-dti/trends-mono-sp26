import express, { Express } from "express";
import cors from "cors";

const app: Express = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// GET
app.get("/api/", async (req, res) => {
  res.send("Hello World!");
});

// POST
app.post("/api/", async (req, res) => {
  try {
    const key = req.body.key;
    if (!key) {
      throw new Error("key not found");
    }
    console.log(key);
    // Do something with the key
    res.json({ message: `Hello, world! Your key was ${key}` });
  } catch (e: any) {
    res.status(404).json({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/* ALL SLIDES CODE
// // GET
// // FOR QUICK EXAMPLE
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// // Listen
// // FOR QUICK EXAMPLE
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// // POST
app.post("/", (req, res) => {
  const body = req.body;
  res.send("This is a POST request with body: " + JSON.stringify(body));
});

// //PUT
app.put("/user", (req, res) => {
  const body = req.body;
  const username = req.body.username;
  res.send("This is a PUT request for user: " + username);
});

// //DELETE we dont delete just yet cause we dont have a database but we can still send a response
app.delete("/user/:id", (req, res) => {
  res.send(`This is a delete request for id ${req.params.id}`);
});
*/

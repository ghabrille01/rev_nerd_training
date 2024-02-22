const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

app.use(express.json());

// should pull from enviornment variables to keep key private
const secretKey = "your-secret-key";

// dummy user db
const users = [];

app.post("/register", async (req, res) => {
  const { username, password, role } = req.body;

  const newUser = { id: users.length + 1, username, password, role };
  users.push(newUser);

  res.status(201).json({ message: "User registered sucessfully", newUser });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // find user in the array
  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    res.status(401).json({ message: "Invalid Credentials" });
  }

  // make jwt to return

  const token = jwt.sign({
    id: user.id,
    username: user.name,
    role: user.role
  },
  secretKey,
  {
    expiresIn: "15m", // token expiration time (adjustable)
  })

  res.json({ token: token });
});

app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Protected Route Accessed", user: req.user });
});

// token should come from the http Authorization key
// to send to serve value has a format: Bearer **token**
function authenticateToken(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({message: "Unauthorized Access"})
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({message: "Forbiden Access"});
        }
        req.user = user
        next();
    })
}

app.listen(PORT, () => {
  console.log(`Server is listeining on http://localhost:${PORT}`);
});

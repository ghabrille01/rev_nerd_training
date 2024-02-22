const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveInitialized: true,
    cookie: {
        secure: false, // set to true in a production environment when you are using HTTPS
        maxAge: 24 * 60 * 60 * 1000, // sessions duration in milliseconds
    }
}))


/**
 * 
 * Secret: This should be a long random string used to sign the session cookie, make it as secure as possible
 * 
 * Resave: This option forces the sesion to be saved back to the session store, even if it wasn't modified during the request
 * 
 */

app.get('/set-session', (req, res) => {
    req.session.username = 'Jogn Doe'; // store data in the session
    res.send("Session data set");
});

app.get('/get-session', (req,res) => {
    const username = req.session.username; // retrueves data from the session
    res.send(`Username: ${username}`);
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        console.log();
    })
    console.log();
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})

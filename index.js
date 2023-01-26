const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static("public"));

// app.get("/", (request, response) => {
//     readFile("home.html", "utf8", (err, html) => {
//         if (err) {
//             response.status(500).send("sorry we are working on it");
//         }
//         response.send(html);
//     });
// });

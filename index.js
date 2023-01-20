const express = require("express");
const app = express();

app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));

// app.get("/", (request, response) => {
//     readFile("home.html", "utf8", (err, html) => {
//         if (err) {
//             response.status(500).send("sorry we are working on it");
//         }
//         response.send(html);
//     });
// });

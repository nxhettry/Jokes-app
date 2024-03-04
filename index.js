import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const baseURl = "https://v2.jokeapi.dev/joke/";
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(baseURl + "Any");
        res.render("index.ejs", { question: result.data.setup, answer: result.data.delivery});
    } catch (error) {
        res.render("index.ejs", { content: error.response.data });
    }
});

app.listen(port, () => {
    console.log(`Listening from port ${port}.`);
});
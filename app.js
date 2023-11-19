
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const items = [];
const workitems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", function (req, res) {
		res.render("list", {
		newListItems: items,
	});
});

app.post("/", (req, res) => {
	const item = req.body.newItem;
	if (req.body.list === "Work") {
		workitems.push(item);
		res.redirect("/work");
	}else {
		items.push(item);
		res.redirect("/");
	}
});


app.listen(3000, function () {
	console.log("Server started on port 3000.");
});

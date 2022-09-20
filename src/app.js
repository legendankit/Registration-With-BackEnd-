const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/user_regis");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views" );
const partials_path = path.join(__dirname, "../templates/partials" );

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/register", (req, res) => {
//   res.render("register");
// });

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/index", async (req, res) => {
   try {
    
    const userregister = new Register({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      city: req.body.city,
      country: req.body.country,
      gender: req.body.gender
    })

    const registered = await userregister.save();
    res.status(201).render("index");

   } catch (error) {
    res.status(400).send(error);
   }
});



app.listen(port, () => {
    console.log(`Server is runnning at port ${port}`);
});
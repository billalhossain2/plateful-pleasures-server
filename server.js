// fake data
const chefsData = require("./data/chefsData.json")
const featuredRecipes = require("./data/featured-recipes.json")

const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors())

const port = process.env.port || 9000;


app.get("/", (req, res)=>{
    res.send(`Server is listening on the port ${port}`)
})

app.get("/chefs-data", (req, res)=>{
    res.send(chefsData)
})

app.get("/chef-recipes/:id", (req, res)=>{
   const chefId = parseInt(req.params.id);
   const chefRecipes = chefsData.find(item => item.id === chefId);
   res.send(chefRecipes)
})

app.get("/featured-recipes", (req, res)=>{
    res.send(featuredRecipes)
})

app.listen(port, ()=>{
    console.log(`Server is listening on the port ${port}`)
})
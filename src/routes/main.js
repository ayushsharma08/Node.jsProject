const { application } = require("express")
const express = require("express")
const routes = express.Router()

//fetching the sotred data in mongoose to route
const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/service");
const Contact = require("../models/Contact");

routes.get("/", async (req, res) => {
   const details = await Detail.findOne({ "_id": "6343f09fd4e29ba071f777d5" })
   const slides = await Slider.find();
   const services = await Service.find()


   res.render('index', { details: details, slides: slides, services: services })

});
routes.get("/gallery", async (req, res) => {
   const details = await Detail.findOne({ "_id": "6343f09fd4e29ba071f777d5" })

   res.render('gallery', { details: details })
});

//process contact form

routes.post("/form-contact", async(req, res) => {
   console.log("this form is submitted.")
   console.log(req.body);

   try {
      const data = await Contact.create(req.body)
      console.log(data);
      res.redirect("/")
   } catch (e) {
      console.log(e);
      res.redirect("/");
   }
})





module.exports = routes;
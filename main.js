const express = require('express')
const{ route } = require('express/lib/application')

const Detail = require("../models/Detail")
const Slider = require('../models/slider')
const Service = require('../models/service')
const Contact = require('../models/contact')





const routes = express.Router()

routes.get("/",async(req,res) =>{

    const details =await  Detail.findOne({"_id":"646614991fde9147d5ede3fb"})
    const services = await Service.find()
    const slides = await Slider.find()
 //   console.log(details)
  console.log(slides);
    res.render("index.hbs",{
        details:details,
        services:services,
        slides:slides
    })


});




 

routes.get("/",(req,res)=>{
    res.render('index.hbs')
})
routes.get('/gallery',async (req,res)=>{
    const details =await  Detail.findOne({"_id":"646215dfde38cc114d2af0f2"})

    res.render("gallery.hbs",{
        details:details
    });
})

routes.post("/process-contact-form",async (req,res) =>{
 //   console.log("form is submitted");
  //  console.log(req.body);
  
  try{
        const data= await Contact.create(req.body) 
        console.log(data)
        res.redirect("/")
  }
  catch(e){
     console.log(e)
     res.redirect("/")
  }


})


module.exports= routes
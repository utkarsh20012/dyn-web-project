const express = require("express")
const app = express()
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')
const Detail=require('./models/Detail')
const Slider = require('./models/slider')
const Service = require('./models/service')
const bodyParser = require('body-parser')


mongoose.connect("mongodb+srv://satyam:0utkarsh1@cluster0.yzevbl6.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('Database connected');

  //   Service.create([

  //   {
  //     icon:'fab fa-accusoft',
  //     title:'Provide Best Courses',
  //     description:'we Provide Best Courses To Help Our Student In Learnig and For Placements',
  //     linkText:'#grfiugrh',
  //     link:'Check'

  //   },
  //   {
  //     icon:'fab fa-affiliatetheme',
  //     title:'Provide Best Courses',
  //     description:'we Provide Best Courses To Help Our Student In Learnig and For Placements',
  //     linkText:'#grfiugrh',
  //     link:'Check'

  //   },
  //   {
  //     icon:'fab fa-affiliatetheme',
  //     title:'Provide Best Courses',
  //     description:'we Provide Best Courses To Help Our Student In Learnig and For Placements',
  //     linkText:'#grfiugrh',
  //     link:'Check'

  //   }






  //  ]) 

   
    
    
 
    
   
    

    
/* 
    Detail.create({
      brandName: "SatyamTech",
      brandIconUrl: "https://us.123rf.com/450wm/pixbold/pixbold2109/pixbold210900418/174780885-g-letter-initial-luxurious-logo-template-premium-g-logo-golden-concept-g-letter-logo-with-golden.jpg?ver=6",
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Services",
          url: "/services"
        },
        {
        label : "gallery",
        url : "/gallery"
        },
        {
          label : "About",
          url : "/about"
        },
        {
          label : "Contact us",
          url : "/contact-us"
        }



      ] 
    }); */  

    /*    Slider.create([
      {
        title: 'you know this is first slide',
        subTitle: 'yeah this is 1',
        imageUrl: '/static/images/h1.jpg',
        class:'active'

      },
      {
        title: 'you know this is second slide',
        subTitle: 'yeah this is 2',
        imageUrl: '/static/images/h2.jpg',
        class:''
      },
      {
        title: 'you know this is third slide',
        subTitle: 'yeah this is 3',
        imageUrl: '/static/images/h3.jpg',
        class:''
      }
    ]);   */
   

  })   
  .catch((err) => console.log(err));


  app.use(bodyParser.urlencoded({

    extended:true
  }))
  

app.use('/static',express.static("public"))




app.use('',routes)



app.get("/home/ghar",(req,res)=>{
    res.send("wow this is data from server this is the second line");
    
})

app.set('view engine ','hbs')
app.set("views","views") // second views is path of folder
hbs.registerPartials("views/partials") 

app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
})

app.use('/gallery',routes);






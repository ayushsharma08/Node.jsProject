const express = require("express");
const hbs = require('hbs');
const app = express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser')
const routes = require('./routes/main');
const Detail = require('./models/Detail')
const Slider= require('./models/Slider')
const Service= require('./models/service')

//  /static/css/style

app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('public'));
app.use('', routes);

//(template engine)

app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials")

//db collection


mongoose.connect('mongodb://localhost:27017/website_tut', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {

// Service.create([
//     {
//         icon:'fab fa-accusoft',
//         title:'Provide Best courses',
//         description:'We provide the best courses regarding all technology',
//         linkText:'https://www.codewithharry.com',
//         link:'Check'
//     },
//     {
//         icon:'fab fa-affiliatetheme',
//         title:'Learn Technology',
//         description:'We provide the best courses regarding all technology',
//         linkText:'https://www.codewithharry.com',
//         link:'Learn'
//     },
   
// ])

// Slider.create([
//     {
//         title:'Learn Java in very easy manner',
//         subTitle:'java is one of the most popular programming language',
//         imageUrl:'/static/images/slider1.jpg'
//     },
//     {
//         title:'Learn Javascript in very easy manner',
//         subTitle:'Javascript is one of the most popular programming language',
//         imageUrl:'/static/images/slider2.jpg'
//     },
//     {
//         title:'Learn Python in very easy manner',
//         subTitle:'Python is one of the most popular programming language',
//         imageUrl:'/static/images/slider3.jpg'
//     },
// ])

    // Detail.create({
    //     brandName: "Info Technical Solution",
    //     brandIconUrl: "data:image/png;base64,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"
    // ,
    // links:[{
    //     label:"Home",
    //     url:"/"
    // },
    // {
    //     label:"Services",
    //     url:"/services"
    // },
    // {
    //     label:"Gallery",
    //     url:"/gallery"
    // },
    // {
    //     label:"About",
    //     url:"/about"
    // },
    // {
    //     label:"Contact us",
    //     url:"/contact-us"
    // },
    // ]
    // })   
});
mongoose.connection.on("error", console.error.bind(console, "connection error:"));
mongoose.connection.once("open", () => {
    console.log("Database connected");
});
// try {
//      mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true ,useUnifiedTopology: true,},()=>{
//         console.log("database connected");
//      });
// } catch (error) {
//     console.error(error);
// }


app.listen(process.env.PORT || 3000, () => {
    console.log("server");
})
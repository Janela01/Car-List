//makes it easier to handle requests than in node.js
const express= require('express');

//this helps to access,change,modify mongodb easyly
const mongoose=require('mongoose');



const carRoutes=require('./routes/carRoutes');
const mongooseRoutes=require('./routes/mongooseRoutes');

//activates express
const app =express();


//connect to mongodb
const dbURL='mongodb+srv://Janela:Camaro2016@firstdatabase.zo7oupl.mongodb.net/CJ-First?retryWrites=true&w=majority'
mongoose.connect(dbURL).then((result)=>{console.log("connected to db"); app.listen(3000);}).catch((err)=>console.log(err))

//register view engine ejs default directory views
app.set('view engine','ejs');

//change folder directory from views to ejsviews
app.set('views','ejsviews');

//makes everything in public folder accessable for browser
app.use(express.static('public'))

//this transforms the data that comes from form element into object so this data is accessible with res.body as object
app.use(express.urlencoded({extended:true}));

app.use('/k',mongooseRoutes);

app.get('/',(req,res)=>{
      res.redirect('/cars');
})

app.get('/about',(req,res)=>{
      res.render('about',{title: ' | About'});
})

app.use('/cars',carRoutes);

app.use((req,res)=>{
      res.status(404).render('404',{title: " | Error: 404"});
})


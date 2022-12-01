//imports module of mongoose located in models/car.js
const Car=require('../models/car');


const add_car=(req,res)=>{
      const car=new Car({
            model:'Ford Mondeo',
            imp:'2016 8+',
            info:'this car is same as form fusion but fusion is american model, it is 2019 year model, and is in great condition, distance driven is 10000km'
      });
      car.save().then((result)=>res.send(result)).catch((err)=>console.log(err))
}

const all_cars=(req,res)=>{
      Car.find().then((result)=>{
            res.send(result);
      }).catch((err)=>console.log(err));
}

const find_car_by_id=(req,res)=>{
      Car.findById('6387a8574b72cf6f4c7d153e').then((result)=>{
            res.send(result);
      }).catch((err)=>console.log(err));
}


module.exports={
      add_car,
      all_cars,
      find_car_by_id
}
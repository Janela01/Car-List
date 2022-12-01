//imports module of mongoose located in models/car.js
const Car=require('../models/car');


const car_index= (req,res)=>{
      Car.find().sort({createdAt:-1}).then((result)=>{
            res.render('index',{title:' | All Cars',cars:result});
      }).catch((err)=>console.log(err));
}

const car_details=(req,res)=>{
      const car=req.params.id;
      Car.findById(car).then((result)=>{
            res.render('details',{title:" | Car Details",car:result});
      }).catch((err)=>res.status(404).render('404',{title:" | Car Not Found"}));
}

const car_create_get=(req,res)=>{
      res.render('create',{title:' | Add New Car'});
}

const car_create_post=(req,res)=>{
      const car=new Car(req.body);
      car.save().then(()=>res.redirect('/cars')).catch((err)=>console.log(err));
}

const car_delete=(req,res)=>{
      const id=req.params.id;
      Car.findByIdAndDelete(id).then((result)=>{
            res.json({redirect:'/cars'})
      }).catch((err)=>{
            console.log(err);
      })
}


module.exports={
      car_index,
      car_details,
      car_create_get,
      car_create_post,
      car_delete
}
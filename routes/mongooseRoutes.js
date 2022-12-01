const express=require('express');
const router=express.Router();
const mongooseRoutes=require('../controllers/mongooseController');


router.get('/add-car',mongooseRoutes.add_car);

router.get('/all-cars',mongooseRoutes.all_cars);

router.get('/Find-Car-By-Id',mongooseRoutes.find_car_by_id);

module.exports=router;
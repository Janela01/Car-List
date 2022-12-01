const express=require('express');
const router=express.Router();
const carController=require('../controllers/carController');


router.get('/',carController.car_index);

router.post('/',carController.car_create_post);

router.get('/create',carController.car_create_get);

router.get('/:id',carController.car_details);

router.delete('/:id',carController.car_delete);

module.exports=router;
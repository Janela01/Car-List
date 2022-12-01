const mongoose=require('mongoose');
//defines structure of documents that we are gonna store inside the collection of mangodb
const Schema= mongoose.Schema;
//creates structure
const carSchema=new Schema({
      // if you want to have one requirement use : title: String,
      model:{
            type:String,
            required:true
      },
      imp:{
            type:String,
            required:true
      },
      info:{
            type:String,
            required:true
      }
      
},{
      timestamps:true
});
const Car=mongoose.model('Car',carSchema)
module.exports=Car;
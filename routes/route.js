const express = require('express');
const router = express.Router();
const Student = require('../data/model')
router.get('/student/getall',async (req,res)=>{
    try{
        const data = await Student.find();
        res.status(200).json(data);
    }
    catch(error){
     console.log(error);
    }
})

router.get('/student/getbyid/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const data = await Student.findById(id);
        res.status(200).json(data);
    }
    catch(error){
     console.log(error);
    }
})

router.post('/student/add',async (req,res)=>{
    try{
      const student= new Student({
        name:req.body.name,
        age:req.body.age
      });
      const result=await student.save();
      res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
})

router.delete('/student/delete/:id',async (req,res)=>{
   try{
      const id = req.params.id;
      const result= await Student.findByIdAndDelete(id);
      res.status(200).json({messge:"deleted succesfully"})
   }
   catch(err){
    console.log(err);
   }
})

router.put('/student/update/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const options = {new:true};
        const result = await Student.findByIdAndUpdate(id,data,options);
        res.status(200).json(result);
     }
     catch(error){
         res.status(500).json({error:error.message});
     }
})


module.exports= router;
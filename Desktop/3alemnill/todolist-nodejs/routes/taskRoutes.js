const express = require('express')
const router = express.Router();
const Task = require('../models/task')

router.get('/tasks',async (request,response) =>{
    try{
const tasks = await Task.find()
response.status(200).send(tasks)
    }
    catch(err){
        response.status(500).json({error: err.message })
    }
})

router.post('/tasks',async (request,response) =>{
    try {
        const task = new Task(request.body)
        await task.save()
        response.status(200).json({message:"Added succ " , task });
    }catch(err){ 
        response.status(400).json({error: err.message})

    }
})


router.put("/tasks/:id",async (request,response)=> {
    try {
  const {id } = request.params;
  const dataToUpdate = request.body;
  const task = await Task.findByIdAndUpdate(id,dataToUpdate,{new:true})
  response.status(200).json({message:"update  ss", task })
    }catch(err){
       response.status(400).json({error:err.message})
    }
})
module.exports = router ; 
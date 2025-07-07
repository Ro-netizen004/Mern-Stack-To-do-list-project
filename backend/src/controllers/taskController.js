import { Task } from "../../models/task.js";

export async function getTaskbyId(req, res){
    try{
        const id = req.params.id;
        const searchedTask = await Task.findById(id);
        if(!searchedTask){
            return res.status(404).json({"message": "Task not found"});
        }
        res.status(200).json(searchedTask);

    }
    catch(error){
        console.error("Error in getTaskbyId controller", error);
        res.status(500).json({"message": "Internal server error"});
    }
}

export async function getAllData(_, res){
    try{
        const tasks = await Task.find().sort({createdAt: -1});
        res.status(200).json(tasks);
    }
    catch(error){
        console.log("Error in getAllData controller", error);
        res.status(500).json({"message": "Internal server error"});
    }
}

export async function createTask(req, res){
    try{
        const {title, content} = req.body;
        const newtask = new Task({title, content});
        const savedTask = await newtask.save();
        res.status(201).json(savedTask);
    }
    catch(error){
        console.log("Error in createTask controller", error);
        res.status(500).json({"message": "Internal server error"});
    }
    
}

export async function deleteTask(req, res){
    try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if(!deletedTask){
            return res.status(404).json({"message": "Task not found"});
        }
        res.status(200).json({"message": "Task deleted successfully!"});
    }
    catch(error){
        console.log("Error in deleteTask controller", error);
        res.status(500).json({"message": "Internal server error"});
    }
}

export async function updateTask(req, res){
    try{
        const {title, content} = req.body;
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {title, content}, {
            new : true
        });

        if(!updatedTask){
            return res.status(404).json({"message": "Task not found"});
        }
        res.status(200).json(updatedTask);
    }
    catch(error){
        console.log("Error in createTask controller", error);
        res.status(500).json({"message": "Internal server error"});
    }
}
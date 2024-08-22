const animals = require('../models/animalModel');


// getAllAnimal 
const getAllAnimal = async (req, res)=>{
    try {
        const animalData = await animals.find();
        res.status(200).json({
            message : "Get all Animal",
            data : animalData,
            success : true
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}



// create animal 
const createAnimal = async (req, res)=>{
    try {
        const {name, image, category} = req.body;
        const newAnimal = new animals({
            name,
            image, 
            category
        })
        const animalData = await newAnimal.save();
        res.status(201).json({
            message : "Created animal information",
            sucess : true,
            data : animalData
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}



module.exports = {getAllAnimal, createAnimal}
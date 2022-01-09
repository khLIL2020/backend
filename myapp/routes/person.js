

const express=require('express')
var mongoose = require("mongoose");
const PersonController = require('../controllers/personController')
const router=express.Router();
const Person=require('../models/Person')

router.get('/',PersonController.findPeople)

router.post('/', PersonController.addAproduct)

router.post('/peoples', PersonController.createManypeoples)

router.get("/id/:id",PersonController.findById);

router.get("/name/:nom",PersonController.findTheName);

router.delete("/supprimer/:id",PersonController.deleteById)

router.put("/changer/:id",PersonController.updateById)
router.get("/nom/:id/:nom",PersonController.updateName)

module.exports=router; 
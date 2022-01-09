const { deleteOne } = require('../models/Person')
const Person=require('../models/Person')


const findPeople = async (req,res,next)=> {
   try {
  const people =  await Person.find()
    res.status(200).send({people})
   } catch (error)
    {
    throw new Error('couldnt find people ')
   }

}
const addAproduct= async (req,res,next)=>
{
   await console.log(res)
    var item={
        title:req.body.title,
        id:req.body.id,
        description:req.body.description,
        posterURL:req.body.posterURL,
        rating:req.body.rating,
        bandeannonce:req.body.bandeannonce,
        link:req.body.link,
        type:req.body.type,
}
console.log("test")
var data=new Person(item);
data.save();
res.status(201).send({message: "person was created successfully", newPerson : data})
}
const createManypeoples=function (req,res,next)
{
   const arrayOfPeople=[{name: 'John', age:87,favoriteFood:["chips","pizza"]}, {name: 'Ahmed', age:19,favoriteFood:["sushi","hamburger"]},{name: 'Cyrine', age:16,favoriteFood:["Sandwich","pates"]},{name: 'Youssef', age:9,favoriteFood:["saumon","pizza"]} ]


console.log(arrayOfPeople) 
Person.insertMany(arrayOfPeople)
   
    .then(function(){ 
        console.log("Data inserted") 
       
    }).catch(function(error){ 
        console.log(error)  
    });

res.status(201).send({message: "person was created successfully", arrayOfPeople})
}

const findById=async(req,res)=>{
    try {
         const _id=req.params.id;
         console.log(_id)
         const thePerson=await Person.findById(_id);
         console.log(thePerson);
         if(!thePerson){
             return res.status(404).send();
         }else 
            res.send(thePerson);
    }
    catch(err) {
          res.send(err);
    }
}

const findTheName=async(req,res)=>{
    try {
         const nom=req.params.nom;
         console.log(nom)
         const thePerson=await Person.find({nom:nom});
         console.log(thePerson);
         if(!thePerson){
             return res.status(404).send();
         }else 
            res.send(nom)
    }
    catch(err) {
          res.send(err);
    }
}
const deleteById=async(req,res)=>{

    const id=req.params.id;
    console.log("test",id)
Person.deleteOne({id}).then(function(){
    res.status(201).send({message: id})
    res.status(201).send({message: "deleted"}) // Success
}).catch(function(error){
    console.log(error); // Failure
})}

const updateById= async(req,res)=>{
    var id =  req.params.id;

    Person.findOne({id: id},function(err,foundObject){
        if(err){
            console.log(err);
            res.status(500).send();

        }else {
            if(!foundObject){
                res.status(404).send();
            } else {
                if(req.body.title) {
                    foundObject.title=req.body.title;
                }

                foundObject.save(function(err,updateOject){
                    if(err){
                        console.log(err);
                        res.status(500).send();

                    }
                    else{
                        res.send(updateOject);
                    }
                })
            }
        }
    })
    }


const updateName= async(req,res)=>{
    var id =  req.params.id;
    var nom =  req.params.nom;
    Person.findOne({id: id},function(err,foundObject){
        if(err){
            console.log(err);
            res.status(500).send();

        }else {
            if(!foundObject){
                res.status(404).send();
            } else {
                if(nom) {
                    foundObject.nom=req.params.nom;
                }

                foundObject.save(function(err,updateOject){
                    if(err){
                        console.log(err);
                        res.status(500).send();

                    }
                    else{
                        res.send(updateOject.nom);
                    }
                })
            }
        }
    })
    }
module.exports = {updateName,findPeople,createManypeoples,addAproduct,findById,deleteById,updateById,findTheName}
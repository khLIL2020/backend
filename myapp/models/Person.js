 const mongoose = require('mongoose');
 
 
 const person=mongoose.Schema({
  
title:String,
  id:String,
  description:String,
  posterURL:String,
  rating:String,
  bandeannonce:String,
  link:String,
  type:String,
  nom:String,

  });

  module.exports = mongoose.model('People',person)
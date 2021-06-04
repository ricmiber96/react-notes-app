const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noteSchema = new Schema({
    id:Number,
    title:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:Number,required:true},
    completed:{type:Boolean,required:true},
    date:{type:Date,required:true},
    },{
        timestamps:true,
    })

const Note = mongoose.model('Note',noteSchema)
module.exports= Note
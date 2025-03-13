// Create a schema and use it to create a model
import mongoose, { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const librarySchema = new Schema({
    title: {type:String, required:true, unique:true},
    author: {type:String, required:true},
    pages:{type:Number, required:true},
    publishedDate:{type:String},
    genre:{type:String, required:true},
    language:{type:String, required:true},
    publisher:{type:String, required:true},
    summary:{type:String, required:true},
    image: {type:String}

}, {timestamps:true

});


librarySchema.plugin(normalize)

export const LibraryModel = model('Book', librarySchema);
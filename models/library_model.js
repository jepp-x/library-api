// Create a schema and use it to create a model
import { Schema, model } from "mongoose";
const librarySchema = new Schema({
    title: {type:String, required:true, unique:true},
    author: {type:String, required:true},
    pages:{type:Number, required:true},
    publishedDate:{type:Date, required:true},
    genre:{type:String, required:true},
    language:{type:String, required:true},
    publisher:{type:String, required:true},
    summary:{type:String, required:true},

}, {timestamps:true

});

export const LibraryModel = model('Book', librarySchema);
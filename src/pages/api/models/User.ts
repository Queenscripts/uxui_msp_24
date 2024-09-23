import mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, required: true},
    github: {type: String, required: false},
     name: {type: String, required: false}, 
     motivation: {type: String, required: false}, 
     location: {type: String, required: false}, 
     portfolio: {type: String, required: false}, 
     os: {type: String, required: false}, 
     hobbies: {type: String, required: false}, 
     industry: {type: String, required: false}, 
     prevIndustry: {type: String, required: false}
})

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
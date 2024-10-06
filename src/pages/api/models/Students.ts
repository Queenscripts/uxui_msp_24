import mongoose from "mongoose";

export interface IStudent extends mongoose.Document{
    name: string;
    email: string;
    github?: string;
    motivation?: string; 
    location?: string;
    portfolio?: string;
    os?: string;
    hobbies?: string[]; 
    industry?: string; 
    prevIndustry?: string;
}

const StudentSchema = new mongoose.Schema({
    name:{type: String, require: false},
    email: {type: String, require: true},
    github: {type: String, require: false},motivation: {type: String, require: false},
    location: {type: String, require: false},
    portfolio: {type: String, require: false},
    os: {type: String, require: false},
    hobbies: {type: String, require: false},
    industry: {type: String, require: false},
    prevIndustry: {type: String, require: false},
})

export default mongoose.models.Student || mongoose.model<IStudent>("Student", StudentSchema);
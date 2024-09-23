import mongoose from "mongoose";

export interface IGlossary extends mongoose.Document{
    name: string;
    topic: string;
    description: string;
    tag: string;
    resource: string;
}

const GlossarySchema = new mongoose.Schema({
    name: {type: String, require: false},
    topic: {type: String, required: false},
    description: {type: String, required: false},
     tag: {type: String, required: false},
     resource: {type: String, required: false}
})

export default mongoose.models.Glossary || mongoose.model<IGlossary>("Glossary", GlossarySchema);
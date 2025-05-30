import mongoose, { Schema } from "mongoose";

const LinkSchema = new Schema({
    url: String,
    api_key: String,
    discord: String,
    timing: Number
})

export default mongoose.models.Link || mongoose.model('Link', LinkSchema);
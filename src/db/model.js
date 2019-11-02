import mongoose from 'mongoose'

const HelloSchema = mongoose.Schema({
    message: { type: String, required: true}
})

export default mongoose.model('Hello', HelloSchema)
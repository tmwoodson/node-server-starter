import mongoose from 'mongoose'

export default () => mongoose.connect('mongodb://localhost:27017/mongo-database')
    .then( something => console.log('success!'))
    .catch( reason => console.log('failed for reason:', reason))
    .finally( () => console.log("hit finally block"))
import mongoose from 'mongoose';

const connectToDB = () =>{
    const URI = "mongodb://localhost:27017"
    mongoose.connect(URI)
    .then(
        () => console.log('Connected to Database!'));
    };
export default connectToDB;
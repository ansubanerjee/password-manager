import mongoose from 'mongoose';

const connectToDB = async () => {
        await mongoose.connect("mongodb://localhost:27017/PasswordManagerDB")
        .then(() => {console.log("Connected to Database!")})
        .catch((err) => {
            console.log("Unable to connect to Database: " + err);
        });
    };

export default connectToDB;

import mongoose from "mongoose";



const DBConnection= async()=>{
    const MONODB_URI= `mongodb://user:AYUSHJAISWAL@ac-5jpmwgh-shard-00-00.i6qnkls.mongodb.net:27017,ac-5jpmwgh-shard-00-01.i6qnkls.mongodb.net:27017,ac-5jpmwgh-shard-00-02.i6qnkls.mongodb.net:27017/?ssl=true&replicaSet=atlas-14nmz8-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
          await mongoose.connect(MONODB_URI,{useNewUrlParser: true});
         console,log('database connected successfully');
    }catch(error){
        console.error('error while connecting with the database', error.message);

    }
}

export default DBConnection;
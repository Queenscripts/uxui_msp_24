import { connect } from "http2";
import mongoose from "mongoose";
const connection:any = {};

async function connectDb(){
    if(connection?.isConnected){
        return;
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI as string, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
          })

          connection.isConnected = db.connections[0].readyState;
          console.log('MongoDB Connected!');
        } catch (error) {
          console.error('Error connecting to MongoDB:', error);
              
    }
}

export default connectDb;
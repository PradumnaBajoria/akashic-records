import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 4000;

async function start() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/myanimeapp';
  await mongoose.connect(uri).catch(err => { console.error('Mongo connect failed', err); process.exit(1); });

  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}

start();
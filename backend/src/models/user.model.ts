import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: String,
  mal: {
    accessToken: String,
    refreshToken: String,
    expiresAt: Date
  }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
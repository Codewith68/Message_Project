import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Please enter your name'],
    unique: [true, 'Username already exists']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: [true, 'Email already exists']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
  },
  avatar:{
    type:String,
  }
},{timestamps:true});

userSchema.pre('save', function saveUser(next) {
    const user = this;
    user.avatar = `https://robohash.org/${user.userName}`;
    next();
})


const User = mongoose.model('User', userSchema);

export default User;
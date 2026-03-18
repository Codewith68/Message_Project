import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Please enter your name'],
    unique: [true, 'Username already exists'],
    minLength: [3, 'Username must be at least 3 characters long'],
     match: [
        /^[a-zA-Z0-9]+$/,
        'Username must contain only letters and numbers'
      ]
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: [true, 'Email already exists'],
    match: [
        // eslint-disable-next-line no-useless-escape
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address'
      ]
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
  },
  avatar:{
    type:String,
  }
},{timestamps:true});

userSchema.pre('save', async function saveUser() {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(9);
    this.password = await bcrypt.hash(this.password, salt);
  }

  if (!this.avatar) {
    this.avatar = `https://robohash.org/${this.userName}`;
  }
});


const User = mongoose.model('User', userSchema);

export default User;

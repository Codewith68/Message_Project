import User from '../models/users.model.js';
import crudRepository from './crud.repository.js';


const userRepository={
    ...crudRepository(User),

    getUserByEmail: async function(email) {
        return await User.findOne({email});
    },
    getUserByUserName: async function(userName) {
        return await User.findOne({userName}).select('-password'); //password exclude from response
    },

}

export default userRepository;
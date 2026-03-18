import userRepository from '../repository/user.repository.js';
import validationErrors from '../utils/errors/validationErrors.js';

export const signUpService = async (data) => {
  try {
    const newuser = await userRepository.create(data);
    const userResponse = newuser.toObject();
    delete userResponse.password;

    return userResponse;
  } catch (error) {
    console.log('User service error', error);
    if (error.name === 'validationErrors') {
      throw new validationErrors(
        {
          error: error.errors
        },
        error.message
      );
    }
    if (error.name === 'MongoServerError' && error.code === 11000) {
      throw new validationErrors(
        {
          error: {
            email: 'Email already exists',
            userName: 'Username already exists'
          }
        },
        'Validation Error'
      );
    }

    throw error;
  }
};

export default function crudRepository(model) {
    return {
        create:async function(data){
            try {
                const user =model.create(data);
                return user;
            } catch (error) {
                console.log(error);
            }
        },
        getAll: async function() {
            try {
                const allUsers = await model.find();
                return allUsers;
            } catch (error) {
                console.log(error);
            }
        },
        getById: async function(id) {
            try {
                const idUser = await model.findById(id);
                return idUser;
            } catch (error) {
                console.log(error);
            }
        },
        updateById: async function(id, data) {
            try {
                const updatedUser = await model.findByIdAndUpdate(id, data, { new: true });
                return updatedUser;
            } catch (error) {
                console.log(error);
            }
        },
        deleteById: async function(id) {
            try {
                const deletedUser = await model.findByIdAndDelete(id);
                return deletedUser;
            } catch (error) {
                console.log(error);
            }
        }
    
    }
}
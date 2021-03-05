const AppReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };

    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };

    case "EDIT_USER":
      const updatedUser = action.payload
      const updateUsers = state.users.map(user => {
        if(user.id === updatedUser.id){
          return updatedUser
        }
        return user
      })
      return {
        users: updateUsers,
      };
    default:
      return state;
  }
};

export default AppReducer
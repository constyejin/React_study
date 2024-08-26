let initialState = {
  contactList: []
}

function reducer(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case 'ADD_CONTACT' :
      return {
        ...state,
        contactList: [
          ...state.contactList, 
          {
            name: payload.name, 
            phone: payload.phone, 
            email: payload.email,
            profileImg: payload.profileImg,
            profileImgAlt: payload.profileImgAlt,
          },
        ],
      };
      default: 
        return {...state}
  }
}

export default reducer;

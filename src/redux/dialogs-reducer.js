
const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
    chats: [
      {id: 1, name: 'Artem'},
      {id: 2, name: 'Lisa'},
      {id: 3, name: 'Ivan'},
      {id: 4, name: 'Oleg'},
      {id: 5, name: 'Dima'}
    ],
    messages: [
      {id: 1, text: 'Hi'},
      {id: 2, text: 'How are you?'},
      {id: 3, text: 'Are you here?'},
      {id: 4, text: 'Yes'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:{
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 0,
            text: action.newMessageText
          }
        ]
      }
    }
    default:
      return state
  }
}

export const addMessageCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer
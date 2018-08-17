const initialState = {
  notes: [
    {
      title: 'The note',
      content: 'The content of the note'
    }
  ],
  form: {
    title: '',
    content: ''
  }
}

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }

    case 'DELETE_NOTE':
      return {
        notes: state.notes.filter((n => n.id !== action.payload))
      }

    case 'UPDATE_INFO_FORM':
      return {
        ...state,
        form: [...state.form, action.payload]
      }

    case 'CLEAR_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          title: '',
          content: '',
        },
      }

    default:
      return state
  }
}
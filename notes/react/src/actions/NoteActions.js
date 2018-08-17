export const addNote = note => ({
  type: 'ADD_NOTE',
  payload: note
})

export const deleteNote = id => ({
  type: 'DELETE_NOTE',
  payload: id
})

export const updateInfoForm = noteInfo => ({
  type: 'UPDATE_INFO_FORM',
  payload: noteInfo
})

export const clearForm = () => ({
  type: 'CLEAR_FORM',
})

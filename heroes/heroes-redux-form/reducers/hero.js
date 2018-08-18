import { CREATE_HERO, UPDATE_CREATE_HERO_FORM, RESET_HERO_FORM } from '../actions/hero'

let id = 1

const initState = {
  heroes: [
    {
      id: 1,
      name: 'From store',
      power: 'No one',
    },
  ],
  form: {
    create: {
      name: '',
      power: '',
    },
  },
}

export default (state = initState, action) => {
  switch (action.type) {
    case CREATE_HERO:
      action.payload.id = ++id
      return {
        ...state,
        heroes: [...state.heroes, action.payload]
      }
    case UPDATE_CREATE_HERO_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          create: {
            ...state.form.create,
            ...action.payload,
          }
        },
      }
    case RESET_HERO_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          create: {
            name: '',
            power: '',
          },
        },
      }
    default:
      return state
  }
}

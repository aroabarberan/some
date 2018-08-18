export const CREATE_HERO = 'CREATE_HERO'
export const UPDATE_CREATE_HERO_FORM = 'UPDATE_CREATE_HERO_FORM'
export const RESET_HERO_FORM = 'RESET_HERO_FORM'

export const createHero = hero => ({
  type: CREATE_HERO,
  payload: hero,
})

export const updateCreateHeroForm = hero => ({
  type: UPDATE_CREATE_HERO_FORM,
  payload: hero,
})

export const resetHeroForm = () => ({
  type: RESET_HERO_FORM,
})

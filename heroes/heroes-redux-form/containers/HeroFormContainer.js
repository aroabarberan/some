import { connect } from 'react-redux'
import HeroForm from '../components/HeroForm'
import { createHero, updateCreateHeroForm, resetHeroForm } from '../actions/hero'

const mapStateToProps = state => ({
  name: state.hero.form.create.name,
  power: state.hero.form.create.power,
})

const mapDispatchToProps = dispatch => ({
  createHero: hero => {
    dispatch(createHero(hero))
    dispatch(resetHeroForm())
  },
  updateReduxForm: heroInfo => {
    dispatch(updateCreateHeroForm(heroInfo))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HeroForm)

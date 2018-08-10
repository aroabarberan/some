import { connect } from 'react-redux'
import HeroList from '../components/HeroList'

const mapStateToProps = state => {
  return {
    heroes: state.hero.heroes,
  }
}

const HeroListContainer = connect(mapStateToProps)(HeroList)

export default HeroListContainer

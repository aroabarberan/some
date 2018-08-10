import React, { Component } from 'react';
import HeroList from './components/HeroList';
import HeroListContainer from './containers/HeroListContainer';
import HeroForm from './components/HeroForm';
import HeroFormContainer from './containers/HeroFormContainer';
import { getHeroes } from './service/heroService'
import NewHeroForm from './components/NewHeroForm';

export default () => (
  <div className="App" style={{marginBottom: 300}}>
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <main>
      <NewHeroForm />
      <HeroFormContainer />
      <HeroListContainer />
    </main>
  </div>
)

import React from 'react'
import Hero from './Hero';

export default ({ heroes }) => (
  <div>
    {heroes.map(h => (
      <Hero key={h.id} id={h.id} name={h.name} power={h.power} />
    ))}
  </div>
)

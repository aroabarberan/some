import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export function Redirect() {
  return (
    <Router>
      <div>
        <div>
          <Link to='Home'>Home</Link><br />
          <Link to='london'>London</Link><br />
          <Link to='irlanda'>Irlanda</Link><br />
          <Link to='watfor'>Watfor</Link><br />
        </div>

        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/london" component={London} />
          <Route exact path="/irlanda" component={Irlanda} />
          <Route exact path="/watfor" component={Watfor} />
        </div>
      </div>
    </Router>
  )
}

export function Home() {
  return (
    <div>
      <h3>Estamos en el HOMEE!!!</h3>
    </div>
  )
}

export function London() {
  return (
    <div>
      <h3>We go to Londooonnn!!!</h3>
    </div>
  )
}

export function Irlanda() {
  return (
    <div>
      <h3>We go to Irlandaaaa!!!</h3>
    </div>
  )
}

export function Watfor() {
  return (
    <div>
      <h3>We go to Watfooor!!!</h3>
    </div>
  )
}
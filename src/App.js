import React from 'react';
import {Container} from 'semantic-ui-react'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'

import Launch from './Home/Launch'
import Categorys from './Game/Categorys'
import Results from './Game/Results'
import Ranking from './Game/Ranking'
import Questions from './Game/Questions'

function App() {
  return (
    <BrowserRouter>
      <div className='h-100'>
        <Container className='h-100'>
          <Route path='/' exact component={Launch}/>
          <Route path='/categorys' component={Categorys}/>
          <Route path='/questions/:nameCat' component={Questions}/>
          <Route path='/result' component={Results}/>
          <Route path='/ranking' component={Ranking}/>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;

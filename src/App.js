import React from 'react';
import {Container} from 'semantic-ui-react'

import './App.css'

//import Opening from './Home/Opening'
//import Categorys from './Game/Categorys'
//import Questions from './Game/Questions'
//import Results from './Game/Results'
import Ranking from './Game/Ranking'

function App() {
  return (
    <div className='h-100'>
      <Container className='h-100'>
        <Ranking/>
      </Container>
    </div>
  );
}

export default App;

import React from 'react';
import {Container} from 'semantic-ui-react'

import './App.css'

//import Opening from './Home/Opening'
//import Categorys from './Game/Categorys'
//import Questions from './Game/Questions'
import Result from './Game/Result'

function App() {
  return (
    <div className='h-100'>
      <Container>
        <Result/>
      </Container>
    </div>
  );
}

export default App;

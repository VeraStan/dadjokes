import React, { useState } from 'react';
import { render } from 'react-dom';
import './index.html';
import { jokes } from './jokes.js';
import Joke from './Joke/index.jsx';

const App = () => (
  <>
    {jokes.map((joke) => (
      <Joke
        userId={joke.id}
        userName={joke.name}
        text={joke.text}
        likes={joke.likes}
        dislikes={joke.dislikes}
      />
    ))}
  </>
);

render(<App />, document.querySelector('#app'));

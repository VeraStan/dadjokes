import React, { useState } from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

const App = () => {
  const [likesUp, setLikesUp] = useState(0);
  const [likesDown, setLikesDown] = useState(0);

  return (
    <div class="container">
      <div class="joke">
        <div class="joke__body">
          <div class="joke__user">
            <img class="user-avatar" src="assets/img/user01.png" />
            <p class="user-name">Neroxx</p>
          </div>

          <p class="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div class="joke__likes">
          <button
            id="btn-up"
            class="btn-like btn-like--up"
            onClick={() => setLikesUp(likesUp + 1)}
          ></button>
          <span id="likes-up" class="likes-count likes-count--up">
            {likesUp}
          </span>
          <button
            id="btn-down"
            class="btn-like btn-like--down"
            onClick={() => setLikesDown(likesDown + 1)}
          ></button>
          <span id="likes-down" class="likes-count likes-count--down">
            {likesDown}
          </span>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));

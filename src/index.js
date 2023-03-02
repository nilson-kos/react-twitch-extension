import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function onAuth(uid) {
  const element = document.createElement('div');
  element.innerHTML = 'Twitch onAuthorized called with UID: ' + uid;
  element.classList.add('hello');
  return element;
}

document.addEventListener('DOMContentLoaded', function () {
  Twitch.ext.onAuthorized(function (auth) {
    let tuid = auth.userId;

    document.body.appendChild(onAuth(tuid));
  });
});

function Hello() {
  const [count, setCount] = useState(0);
  return (
      <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Hello />, );

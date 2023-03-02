import React from 'react';
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

function Hello(props) {
  return React.createElement('div', null, 'Hello ', props.toWhat);
}

const root = createRoot(document.getElementById('root'));
root.render(
    React.createElement(Hello, { toWhat: 'World' }, null)
);

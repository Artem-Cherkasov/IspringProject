import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CardMaker from './CardMaker/Cardmaker';
import { addEditorChangeHandler, getCardMaker } from './editor'

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <CardMaker cardMaker={getCardMaker()} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

addEditorChangeHandler(render)
render()
console.log(getCardMaker())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

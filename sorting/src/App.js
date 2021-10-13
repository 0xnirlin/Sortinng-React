import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Bar } from './bar';
import { Graph } from './graph';

function App() {
  return (
    <div className="wrapper">
      <Graph/>
    </div>
  );
}

export default App;

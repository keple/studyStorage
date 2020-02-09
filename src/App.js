import React from 'react';
import './App.css';
import Sample from './setttingPage';
import NavBar from "./component/nav";
import Menu from "./component/menus/menu";

function App() {
  return (
    <div className='main'>
      <header className="header">
        <NavBar classname="nav_item"></NavBar>
      </header>
      <section className="content_container">
        <section className="left_side">
          <Menu></Menu>
        </section>
      </section>
      <div className="bottom">
        
      </div>
    </div>
    
  );
}

export default App;

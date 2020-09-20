import React, { Component, Fragment } from "react";
//import logo from "./logo.svg";
import "./App.css";

const StickyNotes = (props) => {
  console.log(props.bgcolor)
  return (
    <div className="notes__list">
      <div className="editable__cont" style={{backgroundColor:props.bgcolor}}>
        <div className="sticky__top">
          <textarea className="note__text" placeholder="This is the docket note."/> 
          <button className="btn btn-img btn__img--fav hover__show">
            <span className="sr-only">Favourite</span>
          </button>
        </div>
        <div className="sticky__bottom">
          <span className="post__date">19 Sept 2020</span>
          <button className="btn btn-img btn__img--write hover__show">
            <span className="sr-only">Write</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      hasNotes :false,
      showing : false
    };
 
      
    this.addNotes = (color) =>{      
      this.setState({
        notes:[...this.state.notes, {color:color} ],
        hasNotes:true
      })
      console.log(color)
    }} 
    toggleClass = () => {
      const currentState = this.state.showing;
      this.setState({ showing: !currentState });
    };

   render(){
    const pallets = ["#ffc976", "#fe9c75", "#b693f8", "#00d4fa", "#e4ef93"];
    const { showing ,hasNotes} = this.state;
    return (
      <div className="App">
        <div className="container__wrapper">
          <div className="sidebar">
            <h2 className="FontSize--M">Docket</h2>
            <button title='Toggle' className={this.state.showing ? 'btn btn-round btn-close': 'btn btn-round'} onClick={this.toggleClass}>
              + <span className="sr-only">Add</span>
            </button>
            {showing ?
            <div className="btn--list">
              {pallets.map((color, i) => (
                <button key={i}
                  className="btn btn-sm btn-round"
                  style={{ backgroundColor: color }}
                  onClick={this.addNotes.bind(this,color)}
                >
                  <span className="sr-only">Add</span>
                </button>
              ))}
            </div>
            :null}
          </div>
          <div className="main-content">
            <div className="search__box">
              <input
                type="search"
                placeholder="Search"
                className="search__box--input"
              />
              <span className="focus__underline"></span>
            </div>
            <h1 className="FontSize--XL">Notes</h1>
            {hasNotes ?
             <div className="notes__container">          
              {this.state.notes.map((note, index) => (
                <Fragment key={index}>
                  <StickyNotes bgcolor={note.color}/>
                </Fragment>
                ))}           
            </div> : <div class="message">You don't have any Notes, Click add button to add notes.</div>
           }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

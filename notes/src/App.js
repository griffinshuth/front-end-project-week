import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      notes: [
        {
          tags: [],
          _id: '',
          title: '',
          textBody: ''
        },
        {
          tags: [],
          _id: '',
          title: '',
          textBody: ''
        },
      {
        tags: [],
        _id: '',
        title: '',
        textBody: ''
      },
      {
        tags: [],
        _id: '',
        title: '',
        textBody: ''
      },
      {
        tags: [],
        _id: '',
        title: '',
        textBody: ''
      }

      ]
    }

  }

 
  componentDidMount() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => {
        const notes = res.data;
        this.setState({ notes});
      })

  }
  handleChange = event => {
    this.setState({ note: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const note = {
      note: this.state.note
    };

    axios.post('https://fe-notes.herokuapp.com/note/create', {note})
  }
  
  render() {
    
    return (
      <div className="App">
      {this.state.notes.map(note =>  {
        return (
          <div className='notes'>
          <div>{note.title}</div>
          <div>{note.textBody}</div>
          </div>
          
          )})}
      </div>
    );
  }
}

export default App;

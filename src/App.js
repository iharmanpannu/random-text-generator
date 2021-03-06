import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Output from './components/Output'
import Select from './components/Controls/Select';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 2,
      // html: true,
      text: false
    };
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios
.get('https://baconipsum.com/api/?type=meat-and-filler&paras=' + this.state.paras + '&format=text')
      .then((response) => {
        this
          .setState({
            text: response.data
          }, function () {
            console.log(this.state);
          });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  showHtml(x) {
    this.setState({html: x}, this.getSampleText);
  }

  render() {
    return (
      <div className="App container">
        <h1>ReactJS Random Text Generator</h1>
        <hr/>
        
        <form className="form-inline">
          <div className="form-group" >
            <label>Include HTML:</label>
            <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
          </div>
        </form>

        <Output value={this.state.text}/>
      </div>
    );
  }
}

export default App;

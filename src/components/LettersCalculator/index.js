import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  getWord = e => {
    this.setState({word: e.target.value})
  }

  render() {
    const {word} = this.state
    return (
      <div className="container">
        <div>
          <h1>Calculate the letters you Enter</h1>
          <label htmlFor="letter">Enter the phrase</label>
          <br />
          <input
            onChange={this.getWord}
            placeholder="Enter the phrase"
            type="text"
            id="letter"
          />
          <br />
          <p>No. of letters: {word.length}</p>
        </div>
        <div>
          <img
            className="calimage"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculatorS"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: '',
  }

  onSearchItems = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="letter">Enter the phrase</label> <br />
              <input
                className="input-element"
                placeholder="Enter the phrase"
                id="letter"
                type="text"
                onChange={this.onSearchItems}
              />
            </div>
            <br />
            <p type="button" className="button">
              No.of letters: {count.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt=" letters calculator"
            className="bg-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

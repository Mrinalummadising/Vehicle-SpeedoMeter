import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  Brake = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="container-bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="it's a Speedometer"
        />
        <h2 className="Speeding">
          Speed is
          <span className="number"> {count}mph </span>
        </h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="btn-accelerate"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button type="button" className="btn-brake" onClick={this.Brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

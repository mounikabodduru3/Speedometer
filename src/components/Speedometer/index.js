// Write your code here

import {Component} from 'react'
import './index.css'

class SpeedMeter extends Component {
  state = {speed: 0}
  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <div className="bottom-card">
          <h1 className="mini-headng">Speed is {speed}mph</h1>
          <p className="desc">min limit is 0mph, Max limit is 200mph</p>
          <div className="btnContainer">
            <button className="accelarateBtn" onClick={this.onIncrement}>
              Accelerate
            </button>
            <button className="breakBtn" onClick={this.onDecrement}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SpeedMeter

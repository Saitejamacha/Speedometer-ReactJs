import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accBtn = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({
        count: prevState.count + 10,
      }))
    }
  }

  brakeBtn = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="man-con">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          alt="speedometer"
          className="bg-con"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="para">Speed is {count}mph</h1>
        <p className="para1">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn" type="button" onClick={this.accBtn}>
            Accelerate
          </button>
          <button className="btn1" type="button" onClick={this.brakeBtn}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

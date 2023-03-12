import {Component} from 'react'
import './index.css'

const stopIcon = 'https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png'

class Stopwatch extends Component {
  state = {
    timerRunning: false,
    Seconds: 0,
  }

  updateTime = () => {
    this.setState(prevState => ({
      Seconds: prevState.Seconds + 1,
      timerRunning: true,
    }))
  }

  timeStart = () => {
    const {timerRunning} = this.state

    if (!timerRunning) {
      this.timerID = setInterval(this.updateTime, 1000)
    }
  }

  timeStop = () => {
    clearInterval(this.timerID)
    this.setState({timerRunning: false})
  }

  timeReset = () => {
    const {timerRunning} = this.state

    if (!timerRunning) {
      this.setState({
        Seconds: 0,
        timerRunning: false,
      })
      clearInterval(this.timerID)
    }
  }

  timeInMinutes = () => {
    const {Seconds} = this.state
    const runMinutes = Math.floor(Seconds / 60)
    return runMinutes < 10 ? `0${runMinutes}` : runMinutes
  }

  timeInSeconds = () => {
    const {Seconds} = this.state
    const runSeconds = Math.floor(Seconds % 60)
    return runSeconds < 10 ? `0${runSeconds}` : runSeconds
  }

  render() {
    // const {Seconds, timerRunning} = this.state

    const timerText = `${this.timeInMinutes()}:${this.timeInSeconds()}`

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-div">
            <img src={stopIcon} alt="stopwatch" className="timer-img" />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="timer-count">{timerText}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="button green"
              onClick={this.timeStart}
            >
              Start
            </button>
            <button
              type="button"
              className="button red"
              onClick={this.timeStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="button orange"
              onClick={this.timeReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch

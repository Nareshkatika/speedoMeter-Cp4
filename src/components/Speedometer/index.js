// Write your code here
import {useState} from 'react'
import './index.css'

const Speedometer = () => {
  const [speed, setSpeed] = useState(0)

  const onIncrease = () => {
    if (speed < 200) {
      setSpeed(prevState => prevState + 10)
    }
  }

  const onDecrease = () => {
    if (speed > 0) {
      setSpeed(prevState => prevState - 10)
    }
  }

  return (
    <div className="BgImgEl">
      <h1 className="headingEl">SPEEDOMETER</h1>
      <img
        className="logoEl"
        alt="speedometer"
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
      />
      <h1 className="headingEl2">Speed is {speed}mph</h1>
      <p className="paragraphEl1">Min Limit is 0mph, Max Limit is 200mph</p>
      <div className="rowArrangeEl12">
        <button onClick={onIncrease} className="button1" type="button">
          Accelerate
        </button>
        <button onClick={onDecrease} className="button2" type="button">
          Apply Brake
        </button>
      </div>
    </div>
  )
}

export default Speedometer

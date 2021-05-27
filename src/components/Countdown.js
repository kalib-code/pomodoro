import { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingsContext } from '../context/SettingsContext'





const Countdown = ({key, timer, animate, children}) => {

  const { stopAnimate } = useContext(SettingsContext)
  

    return (
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ['black', 0.33],
          ['black', 0.33],
          ['black', 0.33],
        ]}
        strokeWidth={6}
        size={220}
        trailColor="blue"
        onComplete={ () => {
          stopAnimate()
        
        }}
      >
        {children}
      </CountdownCircleTimer>
    )
}

export default Countdown

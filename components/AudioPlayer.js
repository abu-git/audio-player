import React from 'react'
import styles from '../styles/AudioPlayer.module.css'

const AudioPlayer = () => {
  return (
    <div className={styles.audioPlayer}>
        <audio src="/audio/backtalk.mp3" preload='metadata'></audio>
        <button>back 30</button>
        <button>play / pause</button>
        <button>forward 30</button>

        {/* current time */}
        <div>0:00</div>

        {/* progress bar */}
        <div>
            <input type='range' />
        </div>

        {/* duration */}
        <div>2:49</div>
    </div>
  )
}

export { AudioPlayer }




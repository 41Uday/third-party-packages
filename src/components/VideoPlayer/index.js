import {Component} from 'react'

import './index.css'

import ReactPlayer from 'react-player'

const videoUrl = 'https://www.youtube.com/watch?v=05HYHpDKR2k'

class VideoPlayer extends Component {
  state = {isPlaying: false}

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const btnTxt = isPlaying ? 'Pause' : 'Play'
    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer url={videoUrl} controls playing={isPlaying} />
        </div>
        <button type="button" onClick={this.onClickPlay} className="button">
          {btnTxt}
        </button>
      </div>
    )
  }
}

export default VideoPlayer

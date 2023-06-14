import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedback: false}

  onchangeFeedback = () => {
    this.setState({feedback: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {feedback} = this.state
    return (
      <div className="main">
        <div className="card">
          {!feedback && (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance ?
              </h1>
              <ul className="emojiCont">
                {emojis.map(each => (
                  <li key={each.id} className="eachEmoji">
                    <img
                      className="image"
                      onClick={this.onchangeFeedback}
                      src={each.imageUrl}
                      alt={each.name}
                    />
                    <p className="emojiName">{each.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {feedback && (
            <div className="feedCont">
              <img src={loveEmojiUrl} alt="love emoji" className="image" />
              <h1 className="feedNote">Thank You!</h1>
              <p className="feedDesc">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback

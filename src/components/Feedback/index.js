import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onChangeStatus = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {id} = emojis
    const {isClicked} = this.state

    return (
      <div className="bg-container">
        {isClicked === true ? (
          <div className="card-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="ul-container">
              {emojis.map(each => (
                <li key={each.id} className="li-element">
                  <img
                    src={each.imageUrl}
                    alt={each.name}
                    onClick={this.onChangeStatus}
                    key={id}
                    className="image"
                  />
                  <p>{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container">
            <img src={loveEmojiUrl} alt="love emoji" className="image" />
            <h1 className="heading">Thank You</h1>
            <p>thank you for your feedback</p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback

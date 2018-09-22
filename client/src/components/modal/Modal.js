import React, { Component } from 'react'

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <div className="modalBody">
          <div className="modalHead">
            <h3>Add a new issue!</h3>
            <i className="fas fa-times-circle" id="closeBtn"></i>
          </div>
            <div className="modalInputs">
              <input type="text" placeholder="GitHub Username:" id="userInput"/>
              <br/>
              <input type="text" placeholder="Repository URL:" id="urlInput"/>
              <br/>
              <button id="submitBtn">Submit!</button>
              <br/>
            </div>
        </div>
      </div>
    )
  }
}

export default Modal;
import React, { Component } from 'react'
import './App.css'
var QRCode = require('qrcode.react')


class App extends Component {
  constructor(props) {
    super(props)
    const text = unescape(window.location.href.split(/#(.+)/)[1] || "")
    this.state = { text }
  }
  onChange(e) {
    const text = e.target.value
    window.location.hash = escape(text)
    this.setState({ text })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p></p>
          <QRCode value={this.state.text} size="256" />
          <p>Write some text, get qr code and permalink</p>
          <textarea cols="120" rows="40"
            onChange={
              (e) => { this.onChange(e) }
            }
            value={this.state.text}
          />
        </header>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
    render() {
      return (
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      )
    }
}

class Box extends Component {
	render(prop) {
		return (
			<button>X</button>
		)
	}
}

render(<App />, document.getElementById('content'));

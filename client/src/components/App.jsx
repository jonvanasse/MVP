import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      days: [],
      direction: true // true = forward, false = backward
    }
  }

  render() {
    return (
      <div>
        <TimeLine days={this.state.posts}/>
      </div>
    )
  }
}

export default App;

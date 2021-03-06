import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
        {this.props.loggedIn?
          <h1>Welcome Back to Exhale!</h1>
        :
          <h1>Welcome to Exhale!</h1>
        }
        <br></br>
        <h3>We're all about helping you live, and be, in the moment.</h3>
        <br></br>
        <h3>So take a deep breath, look around...and <big><em>Exhale</em></big></h3>
      </div>
  )}
}

export default Home;
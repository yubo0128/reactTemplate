import React from 'react'
import logo from './logo.svg'
import './assets/styles/App.scss'
import axios from './Api/index.js'
class App extends React.Component {
  componentDidMount () {
    let url = '/webPatient/doctor/getAllDoctorUserInfo'
    axios.get(url).then()
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>qqqqqqqqqqqqqqqqqqq
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;

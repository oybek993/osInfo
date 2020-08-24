import React, { Component } from 'react'
export default class App extends Component {

  state = {
    arch: [],
    platform: [],
    freemem: [],
    totalmem: [],
    homedir: [],
    uptime: [],
    hostname: [],
    cpu0: [],
    cpu1: []
  };
  getInfo = () => {
    fetch("/api/getInfo")
      .then(res => res.json())
      .then(res => {
        this.setState({
          arch: res.arch,
          platform: res.platform,
          freemem: res.freemem,
          totalmem: res.totalmem,
          homedir: res.homedir,
          uptime: res.uptime,
          hostname: res.hostname,
          cpu0: res.cpus[0].model,
          cpu1: res.cpus.length
        })
      })
  }
  sendInfo = (e) => {
    fetch("/api/sendInfo", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(this.state)
    })
    e.preventDefault();
    alert('It`s send!')
  }


  render() {
    return (
      <div className="container">
        <p>React Info app</p>
        <button onClick={this.getInfo}>Get Info
        </button>
        <button onClick={this.sendInfo}>Send info
        </button>
        <p>Your arch is : <span>{this.state.arch}</span><br />
        Your platform is <span>{this.state.platform}
          </span><br />
        Your free memory is <span>{this.state.freemem}
          </span><br />
        Your total memory is <span>{this.state.totalmem}</span><br />
        Your home directory is <span>{this.state.homedir}</span><br />
        Your uptime is <span>{this.state.uptime}
          </span><br />
        Your hostname is <span>{this.state.hostname}
          </span><br />
        You have <span>{this.state.cpu1} CPUs</span><br />
        Your CPU model is <span>{this.state.cpu0}</span>
        </p>
      </div>
    )
  }
}


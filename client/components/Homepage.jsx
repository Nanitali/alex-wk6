import React from 'react'

export default class Homepage extends React.Component {
  state= {
    username: '',
    message: ''
  }

  changeHandler = e => {
    let message = ''
    if (e.target.name === 'username' && e.target.value === '') {
      message = 'Please enter a name '
    }
    this.setState({
      username: e.target.value,
      message
    })
  }
    submitHanlder = e => {
      e.preventDefault()
    }
    onClick = () => {
      this.props.history.push('/Canvas')
    }

    render () {
      return (
        <React.Fragment>
          <form onSubmit={this.submitHanlder}>
            <input
              type="text"
              id="nameField"
              value = {this.state.username}
              onChange={this.changeHandler}
              placeholder="Your Name"
              name="username" />
            <input
              type="submit"
              value="submit"
              onClick={this.onClick}/>
          </form>
          <p>{this.state.message}</p>
        </React.Fragment>
      )
    }
}

import React from 'react'

class Sports extends React.Component {
  render () {
    const phrase = this.props.phrase || 'Sportsball is the best'
    return <div>
      {phrase}
    </div>
  }
}

export default Sports

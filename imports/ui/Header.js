import React from 'react'
import PropTypes from 'prop-types'
import Item from './HeaderItem'
export default class Header extends React.Component {
  state = {
    active: 'home'
  }

  clicked = e => {
    if (e.target.id != this.state.active) {
      this.setState({ active: e.target.id })
    }
  }
  render() {
    const { state, active } = this.state
    return (
      <div className="header">
        <div className="header__content">
          <h1>Logo</h1>

          <div className="header__list">
            <ul>
              <Item
                title="home"
                active={this.state.active}
                clicked={this.clicked}
              />
              <Item
                title="How It Works"
                active={this.state.active}
                clicked={this.clicked}
              />
              <Item
                title="Pricing"
                active={this.state.active}
                clicked={this.clicked}
              />
              <Item
                title="Signup"
                active={this.state.active}
                clicked={this.clicked}
              />
              <Item
                title="Log in"
                active={this.state.active}
                clicked={this.clicked}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  header: PropTypes.string.isRequired
}

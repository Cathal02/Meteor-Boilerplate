import React from 'react'
import PrivateHeader from './PrivateHeader'
export default class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      searchTerm: ""
    }
  }

  updateSearch = (searchTerm) => {
    this.setState({searchTerm})
  }

render(){

  return(
    <div>
      <PrivateHeader header='Dashboard'/>
      <div className="page-content">
        Dashboard page content
      </div>
    </div>
  )
}

}

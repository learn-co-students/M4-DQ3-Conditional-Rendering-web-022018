import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    render: ''
  }

  changeState = (e) => {

    if(e === 'profile') {
      this.setState({render: <Profile/>})
    } else if(e === 'photos'){
      this.setState({render: <Photos/>})
    } else if(e === 'cocktails'){
      this.setState({render: <Cocktails/>})
    } else if(e === 'pokemon') {
      this.setState({render: <Pokemon/>})
    }
  }


  render() {
    const detailsToDisplay = <div>{this.state.render}</div>

    return (
      <div>
        <MenuBar change={this.changeState}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox

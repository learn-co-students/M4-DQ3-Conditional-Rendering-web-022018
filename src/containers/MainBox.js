import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super();

    this.state = {
      selected: ''
    }
  }

  menuChange = (menuButton) => {
    // console.log(menuButton)
    // console.log(event.target.id.slice(0,1).toUpperCase() + event.target.id.slice(1))
    this.setState({
      selected: menuButton.slice(0,1).toUpperCase() + menuButton.slice(1)
    })
  }

  render() {
    let detailsToDisplay;
    if (this.state.selected==='Profile') {
      detailsToDisplay = <Profile />
    } else if (this.state.selected==='Cocktail') {
      detailsToDisplay = <Cocktails />
    } else if (this.state.selected==='Photo') {
      detailsToDisplay = <Photos />
    } else if (this.state.selected==='Pokemon'){
      detailsToDisplay = <Pokemon />
    } else {
      null;
    }
    console.log(this.state.selected)

    return (
      <div>
        <MenuBar menuChange={this.menuChange}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox

import React from 'react'

const MenuBar = (props) => {
  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const handleClick = (e) => {
    props.handleMenuChange(e.target.id)
  }

  return (
    <div className="ui four item menu" onClick={handleClick}>
      <a className={"item" + (props.selected==="profile" ? " active" : "")} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a className={"item" + (props.selected==="photo" ? " active" : "")} id="photo" onClick={handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={"item" + (props.selected==="cocktail" ? " active" : "")} id="cocktail" onClick={handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={"item" + (props.selected==="pokemon" ? " active" : "")} id="pokemon" onClick={handleClick}>
        <i className="themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar

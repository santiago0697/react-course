import React from "react";

const Header = () => (
  <React.Fragment>
    <div className="header-content">
      <div className="header-title-text">Favourites videos</div>
      <input type="button" value="Add video" className="header-button-add" />
    </div>
  </React.Fragment>
);

export default Header;

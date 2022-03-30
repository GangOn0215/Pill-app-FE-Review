import React from "react";
import Editor from "./Editor";

const Header = ({onCreate}) => {
  return (
    <header className="header-wrapper">
      <h2 className="header-h2">Header</h2>
      <Editor onCreate={onCreate}/>
    </header>
  )
}

export default Header;
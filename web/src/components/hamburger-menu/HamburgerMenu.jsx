import MenuIcon from "../../assets/icons/menu.svg?react";

function HamburgerMenu({ handleClick }) {
  return (
    <button onClick={handleClick} className="inline-block relative z-50 md:hidden">
      <MenuIcon/>
    </button>
  )
}

export default HamburgerMenu
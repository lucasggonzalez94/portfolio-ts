import { Dispatch, FC, SetStateAction } from "react";

import './BurgerMenu.scss';

type BurgerMenuTypes = {
	setActive: Dispatch<SetStateAction<boolean>>;
};

const BurgerMenu: FC<BurgerMenuTypes> = ({setActive}) => {
  return (
    <>
      <input type="checkbox" id="checkbox" onChange={e => setActive(e.target.checked)}></input>
      <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
      </label>
    </>
  )
};

export default BurgerMenu;
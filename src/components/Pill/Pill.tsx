import { FC } from 'react';
import './Pill.scss';

type PillTypes = {
  text: string;
}

const Pill: FC<PillTypes> = ({ text }) => {
  return (
    <div className="pill non-selectable">
      { text }
    </div>
  )
}

export default Pill;

import { FC } from 'react'

import './Text.scss';

type TextTypes = {
  text: string;
  justify?: 'center' | 'end'
}

const Text: FC<TextTypes> = ({text, justify}) => {
  return (
    <div className={`text ${justify ? justify : ''}`}>
      <p>{text}</p>
    </div>
  )
}

export default Text;

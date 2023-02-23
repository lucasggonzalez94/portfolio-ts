import {FC} from 'react';

import './Container.scss';

type ContainerTypes = {
  children: React.ReactNode;
  fill?: boolean;
  title?: string;
  center?: boolean;
}

const Container: FC<ContainerTypes> = ({title, children, fill, center}) => {
  return (
    <div className={`section ${fill && 'fill'} ${center ? 'center' : ''}`}>
      {title && <h2 className='title'>{title}</h2>}
      {children}
    </div>
  );
}
 
export default Container;
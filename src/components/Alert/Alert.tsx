import { FC, useEffect } from 'react';

import './Alert.scss';

import { ReactComponent as Success } from 'static/icons/circle-check-solid.svg';
import { ReactComponent as Error } from 'static/icons/circle-exclamation-solid.svg';

type AlertTypes = {
	type: 'success' | 'error';
	message: string;
	show: boolean;
	setShow: (show: boolean) => void;
};

const Alert: FC<AlertTypes> = ({ type, message, show, setShow }) => {
	useEffect(() => {
		if (show) {
      setTimeout(() => setShow(false), 4000);
    }
	}, [show]);

	return (
    <>
      {show ? (
        <div className={`alert ${type}`}>
          <div className="icon">
            {type === 'success' ? (<Success/>) : (<Error/>)}
          </div>
          <p className='message'>{message}</p>
        </div>
      ) : null}
    </>
  );
};

export default Alert;

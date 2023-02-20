import React from 'react';

import './Banner.scss';

import cv from '../../../static/data/CV.json';

import Blobz from '../../../components/Blobz/Blobz';
import Button from '../../../components/Button/Button';

import { downloadPDF } from '../../../utils/helpers';

const Banner = () => {
  return (
    <div className='banner'>
      <Blobz />
      <div className="contain">
        <h1>Portfolio</h1>
        <h3>Lucas González</h3>
        <h4>Desarrollador Web</h4>

        <Button
          text="Descargar CV"
          onClick={() => downloadPDF(cv.data, 'Curriculum Lucas Gonzalez')}
          variant="border-primary"
          className='my-16'
        />
      </div>
    </div>
  );
};

export default Banner;

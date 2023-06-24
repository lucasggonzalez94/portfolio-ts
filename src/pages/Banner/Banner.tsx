import './Banner.scss';

import cv from 'static/data/CV.json';

import Blobs from 'components/Blobs/Blobs';
import Button from 'components/Button/Button';

import { downloadPDF } from 'utils/helpers';

const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Blobs />
      <div className="contain">
        <h1>Portfolio</h1>
        <h3>Lucas González</h3>
        <h4>Desarrollador Web</h4>

        <Button
          content="Descargar CV"
          onClick={() => downloadPDF(cv.data, 'Curriculum Lucas Gonzalez')}
          className='my-16'
        />
      </div>
    </section>
  );
};

export default Banner;

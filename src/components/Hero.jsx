import React from 'react';
import heroImage from '../assets/lp-featured-jobs-01-2000.jpg';

export const Hero = () => {
  const style = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  return (
    <section className="hero">
      <img style={style} src={heroImage} alt="Featured jobs" />
    </section>
  );
};

export const HeroButton = () => {
  return (
    <div>
      <button type="button">hello fjff</button>
    </div>
  );
};

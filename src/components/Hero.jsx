import React from 'react';
// import heroImage from '../assets/lp-featured-jobs-01-2000.jpg';

export const Hero = () => {
  const style = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };
  const Hero = {
    background:'linear-gradient(120deg, #c1d926 30%, rgba(0,0,0,1) 80%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  }
  const 
  const HeroButton = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '18px',
  
    allignItems: 'center',
    padding: '10px 20px',
    fontSize: '16px',
  }

  return (
    // <section className="hero">
    //   <img style={style} src={heroImage} alt="Featured jobs" />
    // </section>

   <>
    <div style={Hero}>
     <div><button>Streaming Now</button></div>
    </div>
   </>
  );
};

export const HeroButton = () => {
  return (
    <div>
      <button type="button">hello fjff</button>
    </div>
  );
};

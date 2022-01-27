import { useEffect } from 'react';

import bg from '../../images/bg.webp';

const Home = () => {

  useEffect(() => {
    document.body.style.background = "#000";
  }, []);

  return (
    <div className="home">
      <img src={bg} alt="bg" />
      <div className="home__title">
        <h1>Could not find the place to go?</h1>
        <h1>Great!</h1>
        <div className="home__button-container">
          <button>Quick Search</button>
        </div>
      </div>
    </div>
  )
};

export default Home;
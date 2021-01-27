import React from 'react';
import Header from '../header/Header';

const Home = () => (
  <>
    <Header />
    <div className="content-container">
      <h2>Welcome to our Math Magicians!</h2>
      <p>
        A calculator built with React! Click the &quot;Calculator&quot; link above to check it out.
      </p>
    </div>
  </>
);

export default Home;

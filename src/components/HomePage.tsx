import * as React from 'react';
import { Home } from '../pages/Home';
import { Pickup } from '../pages/Pickup';
import { ZeitSample } from '../pages/zeit-sample';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Header } from './header';
// import { Footer } from './footer';
import { About } from '../pages/About';
// import { ShowPost } from './ShowPost';
import { Posts } from '../pages/Posts';

// import './tailwind.css';

export const HomePage = () => (
  <BrowserRouter>
    <Header />
    {/* <header style={{ height: 100, background: '#ddd' }}>head</header> */}
    <Route exact path="/" component={Home} />
    <Route path="/pickup" component={Pickup} />
    <Route path="/zeit-sample" component={ZeitSample} />
    <Route path="/about" component={About} />
    {/* <Route path="/showpost" component={ShowPost} /> */}
    <Route path="/posts" component={Posts} />

    {/* <Footer /> */}
  </BrowserRouter>
);

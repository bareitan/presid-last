import React from 'react';
import './Home.css';
import { Player, BigPlayButton } from 'video-react';
import { NavLink } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../../particles.json'

const Home = () => (
  <div>
    <div className="hero blueBg is-grey is-bold is-medium has-text-white">
      <Particles
        className="is-overlay"
        params={particlesConfig}
      />
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="is-size-1 has-text-weight-bold">Presidio</p>
              <p className="is-size-4">
                Discover, analyze and anonymize sensitive data
              </p>
              <div>
                <div className="button is-info">How does it work?</div>
                <NavLink to="/demo" className="button is-success">
                  Demo
                </NavLink>
              </div>
            </div>
            <div className="column">
              <Player
                className="video-react-fluid"
                src="https://presidio1.blob.core.windows.net/asset-3258bd8e-39ac-445d-8c87-aa562b542421/Presidio introduction video_640x360_AACAudio_300.mp4?sp=r&st=2018-07-19T19:33:46Z&se=2018-11-08T04:33:46Z&spr=https&sv=2017-11-09&sig=LcYjnQI92Cwxih9AMbkVlmTrm9pelj4Ll%2BqzAKdJtI4%3D&sr=b"
              >
                <BigPlayButton position="center" />
              </Player>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
    <section className="section has-background-primary">
    test
    </section>
  </div>
);

export default Home;

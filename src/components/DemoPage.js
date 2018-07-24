import React from 'react';
import './DemoPage.css';
import UserText from './UserText';
import AnonOutput from './AnonOutput';
import FiltersList from './FiltersList';
import FindingsList from './FindingsList';

const DemoPage = () => (
  <div>
    <div className="columns">
      <div className="column is-2 box">
        <FiltersList />
      </div>
      <div className="column">
        <div className="columns">
          <div className="column is-half">
            <div className="box">
              <UserText />
            </div>
          </div>
          <div className="test column is-half">
            <div className="box output">
              <AnonOutput />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <FindingsList />
          </div>
        </div>
      </div>
      </div>
    </div>
);

export default DemoPage;

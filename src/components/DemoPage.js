import React from 'react';
import './DemoPage.css';
import UserText from './UserText';
import AnonOutput from './AnonOutput';
import FiltersList from './FiltersList';
import FindingsList from './FindingsList';

const DemoPage = () => (
  <div className="container">
    <div className="columns">
      <div className="column is-narrow box">
        <FiltersList />
      </div>
      <div className="column box">
        <div className="columns">
          <div className="column is-half ">
            <div className="box">
              <UserText />
            </div>
          </div>
          <div className="column is-half">
            <div className="box output">
              <AnonOutput />
            </div>
          </div>
        </div>
        <div className="column box">
          <div>
            <FindingsList />
          </div>
        </div>
      </div>
      </div>
    </div>
);

export default DemoPage;

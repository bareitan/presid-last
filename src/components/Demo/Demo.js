import React from 'react';
import './Demo.css';
import Input from './Input';
import Output from './Output';
import Filters from './Filters';
import SortedFindings from '../../containers/SortedFindings';

const Demo = () => (
  <div>
    <div className="columns">
      <div className="column is-2 box">
        <Filters />
      </div>
      <div className="column">
        <div className="columns">
          <div className="column is-half">
            <div className="box">
              <Input />
            </div>
          </div>
          <div className="test column is-half">
            <div className="box output">
              <Output />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <SortedFindings />
          </div>
        </div>
      </div>
      </div>
    </div>
);

export default Demo;

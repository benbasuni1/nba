import React from 'react';
import TopTenPPG from './statsComponents/TopTenPPGComponent.jsx';
import TopTenAPG from './statsComponents/TopTenAPGComponent.jsx';
import TopTenRPG from './statsComponents/TopTenRPGComponent.jsx';

class StatsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div align="center" className="point-leaders">Top 5 Point Leaders</div>
          <TopTenPPG />
        <div align="center" className="assist-leaders">Top 5 Assist Leaders</div>
          <TopTenAPG />
        <div align="center" className="point-leaders">Top 5 Rebound Leaders</div>
          <TopTenRPG />
      </div>
    )
  }

}

export default StatsComponent;


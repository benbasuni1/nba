import React from 'react';
import TopTenPPG from './StatsComponents/PPG.jsx';
import TopTenAPG from './StatsComponents/APG.jsx';
import TopTenRPG from './StatsComponents/RPG.jsx';
import $ from 'jquery';

class StatsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pointsLeaders: [],
      assistLeaders: [],
      reboundLeaders: [],
    }
  }

  componentWillMount() {
    this.getPTSLeader();
  }

  getPTSLeader() {
    var data = {
      LeagueID: "00",
      SeasonType: "Regular Season",
      PerMode: "Totals",
      StatCategory: "PTS",
      Season: "2017-18",
      Scope: "S"
    }

    // $.get({
    //   url: 'http://stats.nba.com/stats/leagueleaders',
    //   data: data,
    //   success: data => {
    //     console.log("data: " + data);
    //   }
    // });
  }

  getASTLeader() {
    var data = {
      LeagueID: "00",
      SeasonType: "Regular Season",
      PerMode: "Totals",
      StatCategory: "AST",
      Season: "2017-18",
      Scope: "S"
    }

    $.get({
      url: 'http://stats.nba.com/stats/leagueleaders',
      data: data,
      success: data => {
        console.log("data: " + data);
      }
    });
  }

  getRPGLeader() {
    var data = {
      LeagueID: "00",
      SeasonType: "Regular Season",
      PerMode: "Totals",
      StatCategory: "RPG",
      Season: "2017-18",
      Scope: "S"
    }

    // $.get({
    //   url: 'http://stats.nba.com/stats/leagueleaders',
    //   data: data,
    //   success: data => {
    //     console.log("data: " + data);
    //   }
    // });
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


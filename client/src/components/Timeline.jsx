import React from 'react';
import moment from 'moment';
import { DataSet } from 'vis-timeline/esnest';
import { Timeline } from 'vis-timeline/esnext';
import "vis-timeline/styles/vis-timeline-graph2d.css";

class TimeLine extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      day_selected: moment().format("YYYY-MM-DD"),
      dataSet: this.props.days
    }
    this.setDataSet = this.setDataSet.bind(this);
  }

  setDataSet(days) {
    const container = document.getElementById("visualization");
    const dataSet = new DataSet({
      /* NEED TO INSERT DAYS HERE */
    })
  }

  render() {
    return (
      <div id="visualization"></div>
    )
  }
}

export default TimeLine;

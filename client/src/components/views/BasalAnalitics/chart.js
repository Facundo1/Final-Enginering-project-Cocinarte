import React, { Component } from 'react';
import Highcharts from 'highcharts';

class Chart extends Component {
  componentDidMount() {
    this.chart = new Highcharts[ this.props.type || 'Chart' ](
      this.refs.chart,
      this.props.options
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
      <div ref="chart"/>
    )
  }
}

export default Chart

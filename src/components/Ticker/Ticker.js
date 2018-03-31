import React, { Component } from 'react';

class Ticker extends Component {
  render() {
    let ticker = this.props.ticker;
    let arrow = (
      <i className={`fa fa-caret-${ticker.changeStatus}`} aria-hidden="true" />
    );
    let css_class = `status ${ticker.changeStatus}`;
    return (
      <div className="Ticker">
        <div className="Ticker_name">{ticker.name}</div>
        <div className="Ticker_price">${ticker.price}</div>
        <div className={`Ticker_status ${css_class}`}>
          {arrow}
          {ticker.changePoints} ({ticker.changePercent}%)
        </div>
      </div>
    );
  }
}

export default Ticker;

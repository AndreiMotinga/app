import React, { Component } from 'react';
import Ticker from './Ticker';
import './Tickers.css';
import Hidden from 'material-ui/Hidden';

class Tickers extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tickers: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    // $.getJSON(`${BASE_URL}/appicons?${this.state.key}`, (res) => {
    //   this.setState({ tickers: res })
    // });
    this.setState({
      tickers: [
        {
          id: 1,
          name: 'BTC / USD',
          currency: 'USD',
          exchange: 'Gemini',
          changePoints: 15000.5,
          changePercent: 10.3,
          changeStatus: 'unchanged',
          price: 93000
        },
        {
          id: 2,
          name: 'ETH / USD',
          currency: 'USD',
          exchange: 'Gemini',
          changePoints: 1003.5,
          changePercent: -9.9,
          changeStatus: 'down',
          price: 93000
        },
        {
          id: 3,
          name: 'LTC / USD',
          currency: 'USD',
          exchange: 'Gemini',
          changePoints: 230.5,
          price: 93000,
          changeStatus: 'down',
          changePercent: -4.7
        },
        {
          id: 4,
          name: 'NEO / USD',
          currency: 'USD',
          exchange: 'Gemini',
          changePoints: 140.5,
          price: 93000,
          changeStatus: 'up',
          changePercent: 10.3
        }
      ]
    });
  }

  render() {
    let tickers = this.state.tickers.map(ticker => (
      <Ticker key={ticker.id} ticker={ticker} />
    ));
    return (
      <Hidden smDown>
        <div className="Tickers">{tickers}</div>
      </Hidden>
    );
  }
}

export default Tickers;

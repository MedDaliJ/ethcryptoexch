import React, { Component } from 'react'
import BuyForm from './BuyForm'
import SellForm from './SellForm'
import BuyFormTwo from './BuyFormTwo'
import SellFormTwo from './SellFormTwo'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    if(this.state.currentForm === 'buy') {
      content = <BuyForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />
    } else if (this.state.currentForm === 'sell') {
      content = <SellForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        sellTokens={this.props.sellTokens}
      />
    } else if (this.state.currentForm === 'buytwo') {
      content = <BuyFormTwo
        ethBalance={this.props.ethBalance}
        tokentwoBalance={this.props.tokentwoBalance}
        buyTokensTwo={this.props.buyTokensTwo}
      />
    } else {
      content = <SellFormTwo
        ethBalance={this.props.ethBalance}
        tokentwoBalance={this.props.tokentwoBalance}
        sellTokensTwo={this.props.sellTokensTwo}
      />
    }

    return (
      <div id="content" className="mt-3">

        <div className="d-flex justify-content-between mb-3">
          <button
              className="btn btn-dark"
              onClick={(event) => {
                this.setState({ currentForm: 'buy' })
              }}
            >
            ETH/DApp
          </button>
          <span className="text-muted">__</span>
          <button
              className="btn btn-dark"
              onClick={(event) => {
                this.setState({ currentForm: 'sell' })
              }}
            >
            DApp/ETH
          </button>
          <span className="text-muted">__</span>
          <button
              className="btn btn-dark"
              onClick={(event) => {
                this.setState({ currentForm: 'buytwo' })
              }}
            >
            ETH/BST
          </button>
          <span className="text-muted">__</span>
          <button
              className="btn btn-dark"
              onClick={(event) => {
                this.setState({ currentForm: 'selltwo' })
              }}
            >
            BST/ETH
          </button>
        </div>

        <div className="card mb-4" >

          <div className="card-body">

            {content}

          </div>

        </div>

      </div>
    );
  }
}

export default Main;

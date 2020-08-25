import React, { Component } from 'react'
import tokenLogo from '../bstlogo.png'
import ethLogo from '../eth-logo.png'

class SellFormTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }
  }

  render() {
    return (
      <form className="mb-3" onSubmit={(event) => {
          event.preventDefault()
          let etherAmount
          etherAmount = this.input.value.toString()
          etherAmount = window.web3.utils.toWei(etherAmount, 'Ether')
          this.props.sellTokensTwo(etherAmount)
        }}>
        <div>
          <label className="float-left"><b>Sell</b></label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.tokentwoBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={(event) => {
              const tokentwoAmount = this.input.value.toString()
              this.setState({
                output: tokentwoAmount / 10
              })
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="0"
            required />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={tokenLogo} height='32' alt=""/>
              &nbsp; BST
            </div>
          </div>
        </div>
        <div>
          <label className="float-left"><b>For</b></label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="0"
            value={this.state.output}
            disabled
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={ethLogo} height='32' alt=""/>
              &nbsp;&nbsp;&nbsp; ETH
            </div>
          </div>
        </div>
        <div className="mb-5">
          <span className="float-left text-muted">Exchange Rate</span>
          <span className="float-right text-muted">10 BST = 1 ETH</span>
        </div>
        <button type="submit" className="btn btn-warning btn-block btn-lg">SELL</button>
      </form>
    );
  }
}

export default SellFormTwo;

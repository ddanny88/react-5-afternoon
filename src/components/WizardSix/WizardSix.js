import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCost, updateDownPayment } from '../../ducks/reducer';

class WizardSix extends Component {

    costUpdate = (e) => {
        this.props.updateCost(e.target.value);
    }

    downPaymentUpdate = (e) => {
        this.props.updateDownPayment(e.target.value);
    }



    render() {
        return (
            <div className="parent-div">
                <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />


                    <input type="text" placeholder="amount" onChange={this.costUpdate} /> <br />


                    <p>How much are you putting down as a down payment?</p> <br />


                    <input type="text" placeholder="amount" onChange={this.downPaymentUpdate} />


                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { cost, downPayment } = state;

    return {
        cost,
        downPayment
    }
}

export default connect(mapStateToProps, { updateCost, updateDownPayment })(WizardSix);
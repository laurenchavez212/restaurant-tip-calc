import React, { Component } from 'react'
import { Form, Input, Button, Card, CardText, CardBody } from "reactstrap";
import '../index.css'

class Bill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bill: 0,
            tip: 0,
            subtotal: 0,
            total: 0
        };

    }

    calculate = (event) => {
        event.preventDefault();
        let bill = parseFloat(this.state.bill);
        let tip = parseFloat(this.state.tip);
        let calTax = bill * 0.086;
        let subtotal = bill + tip;
        let total = bill + tip + calTax;

        this.setState({
            bill: bill,
            tip: tip,
            subtotal: subtotal,
            total: total,
        });
    }

    updateBill = (bill) => {
        this.setState({
            bill : bill
        });
    };

    updateTip = (tip) => {
        this.setState({
            tip : tip
        });
    };

    render() {
        return <div className="calculator">
            <Card className="calcCard">
              <CardBody>
                <Form onSubmit={this.calculate}>
                        <Input type="number" onChange={event => this.updateBill(event.target.value)} placeholder="Enter Bill Amount" bsSize="lg" autoFocus/>
                  <br />

                  <Input type="number" onChange={event => this.updateTip(event.target.value)} placeholder="Enter Tip Amount" bsSize="lg" />
                  <br />

                  <Button type="submit" color="primary">
                    Calculate Total Bill
                  </Button>
                </Form>
                <br />
                <CardText>
                  <h4>
                    Tax at 8.6%: $
                    {(this.state.subtotal * 0.0086).toFixed(2)}
                  </h4>
                  <h3>Total: ${this.state.total.toFixed(2)}</h3>
                </CardText>
              </CardBody>
            </Card>
          </div>;
    }
}

export default Bill;
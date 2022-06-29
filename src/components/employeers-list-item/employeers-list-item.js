import { Component } from "react";

import "./employeers-list-item.css";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salaryValue: this.props.salary + "$",
        }
    }

    salaryChange = (e) => {
        const salaryValue = e.target.value;
        // const numbers = /^[0-9],[$]+$/;
        // console.log(e);
        // if (salaryValue.match(numbers)) {
            // console.log(salaryValue);

            this.setState({ salaryValue, })
            this.props.onChange(salaryValue)

    }
    render() {
        const { name, onDelete, increase, rise, onToggleProp } = this.props;

        let targetCkassName = "list-group-item d-flex justify-content-between";
        if (increase) {
            targetCkassName += " increase";
        }
        if (rise) {
            targetCkassName += " like"
        }

        return (
            <li className={targetCkassName} >
                <span className="list-group-item-label" onClick={onToggleProp} data-props="rise">{name}</span>
                <input
                    type="text"
                    className="list-group-item-input"
                    value={this.state.salaryValue}
                    onChange={this.salaryChange} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-props="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }


}

export default EmployeesListItem;
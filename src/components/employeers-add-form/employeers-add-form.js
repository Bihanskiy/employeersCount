import { Component } from "react";

// import './employeers-add-form.css';
import './employeers-add-form.scss'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddNewEmployeer(this.state.name, this.state.salary);
        this.setState({
            name: "",
            salary: "",
        })
    }

    render() {
        const { name, salary } = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form"
                    onSubmit={this.handleSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        name='name'
                        value={name}
                        onChange={this.onValueChange}
                        placeholder="Как его зовут?"
                        required
                        minLength={3}
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}
                        required
                    />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
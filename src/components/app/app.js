import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employeers-list/employeers-list';
import EmployeesAddForm from '../employeers-add-form/employeers-add-form';

import './app.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
                { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
                { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
            ],
            term: "",
            filter: "all",
        };
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addUser = (name, salary) => {
        this.setState(({ data }) => ({
            data: data.concat({
                name,
                salary,
                increase: false,
                rise: false,
                id: nextId(),
            })
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {

        if (term.length === 0) return items
        return items.filter(item => item.name.indexOf(term) > -1)
    }

    onSearchEmployeers = (term) => {
        this.setState({ term })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case "rise":
                return items.filter(item => item.rise);
            case "increase":
                return items.filter(item => item.increase);
            case "moreThen1000":
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onSelectFilter = (filter) => {
        this.setState({ filter })
    }

    onChange = (id, salary) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: salary}
                }
                return item
            })
        }))
    }
    render() {
        const { data, term, filter } = this.state;
        const employeersCount = this.state.data.length;
        const increaseCount = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className='app'>
                <AppInfo
                    employeersCount={employeersCount}
                    increaseCount={increaseCount} />
                <div className="search-panel">
                    <SearchPanel onSearchEmployeers={this.onSearchEmployeers} />
                    <AppFilter filter={filter} onSelectFilter={this.onSelectFilter} />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChange={this.onChange}
                />
                <EmployeesAddForm onAddNewEmployeer={this.addUser} />
            </div>
        )
    }
}

export default App;
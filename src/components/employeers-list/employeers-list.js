import EmployeesListItem from "../employeers-list-item/employeers-list-item";

import "./employeers-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp, onChange }) => {

    const elements = data.map(item => {

        const { id, ...itemProps } = item;

        return (<EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-props"))}
            onChange={(salaryValue) => onChange(id, salaryValue)}
        />)
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default EmployeesList;
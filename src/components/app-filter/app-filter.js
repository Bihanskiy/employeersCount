import "./app-filter.css";

const AppFilter = (props) => {
    const butonsData = [
        { name: "all", label: "Все сотрудники" },
        { name: "rise", label: "На повышение" },
        { name: "increase", label: "Получат премию" },
        { name: "moreThen1000", label: "З/П больше 1000$" },
    ]

    const buttons = butonsData.map(({ name, label }) => {
        const clazz = (props.filter === name) ? "btn-light" : "btn-outline-light";
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onSelectFilter(name)}>
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;
const TVScheduleItem = ({ program }) => {
    return <li className="list-group-item">
        <strong>{program.start}</strong>
        <div>{program.name}</div>
    </li>

}

export default TVScheduleItem;
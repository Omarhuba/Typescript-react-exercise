// import {ProgramTypes} from './TVPage'
import React from 'react'
export type Program = {
    description: string,
    start: string,
    name: string
}
type TVSchedulProps = {
    program: Program,
    // children: React.ReactNode
}


//????????????????
const TVScheduleItem = ( {program}: TVSchedulProps ) => {
    return <li className="list-group-item">
        <strong>{program.start}</strong>
        <div>{program.name}</div>
    </li>

}

export default TVScheduleItem;
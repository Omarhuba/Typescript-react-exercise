import React from 'react'
type Title = {
    title: string | undefined,
    children: React.ReactNode
}


const TVSchedule = ( {title, children}: Title ) => {
    return <>
        <h1 id="js-title">{title}</h1>
        <div id="js-schedule">
            <ul className="list-group list-group-flush">
                {children}
            </ul>
        </div>
    </>
}

export default TVSchedule;
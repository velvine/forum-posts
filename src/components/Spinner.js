import React from 'react'
import spinner from './img/spinner.gif';

const Spinner = () => {
    return (
        <div className="flex my-5 justify-center">
            <img className="h-12 w-12" src={spinner} alt="Loading..." />
        </div>
    )
}

export default Spinner;
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import formatDuration from 'format-duration';
import './Timer.css';

function Timer({ lastChanged }) {
    const [currentTime, setCurrentTime] = useState(lastChanged);

    React.useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            setCurrentTime((new Date()).getTime());
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="timer">
            {formatDuration(currentTime - lastChanged)}
        </div>
    );
}

Timer.propTypes = {
    lastChanged: PropTypes.number.isRequired,
};

export default Timer;

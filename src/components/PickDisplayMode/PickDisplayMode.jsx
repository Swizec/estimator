import PropTypes from 'prop-types';
import React from 'react';

import '~/components/PickDisplayMode/PickDisplayMode.css';
import { DISPLAY_MODE_LABELS, DISPLAY_MODES } from '~/constants';

function PickDisplayMode({ displayMode, onChangeDisplayMode }) {
    const displayModeOptions = Object.values(DISPLAY_MODES).map(
        (mode) => (
            <option key={DISPLAY_MODE_LABELS[mode]} value={mode}>{DISPLAY_MODE_LABELS[mode]}</option>
        ),
    );

    return (
        <div className="pick-display-mode">
            <select value={displayMode} onChange={(event) => onChangeDisplayMode(event.target.value)}>
                {displayModeOptions}
            </select>
        </div>
    );
}

PickDisplayMode.propTypes = {
    displayMode: PropTypes.oneOf(Object.values(DISPLAY_MODES)).isRequired,
    onChangeDisplayMode: PropTypes.func.isRequired,
};

export default PickDisplayMode;

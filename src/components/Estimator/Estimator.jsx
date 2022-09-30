/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';
import ClearBoard from '~/components/ClearBoard/ClearBoard';
import Column from '~/components/Column/Column';
import CreateCard from '~/components/CreateCard/CreateCard';
import { addCard, changeDisplayMode, clearBoard } from '~/actions';

import '~/components/Estimator/Estimator.css';
import { DISPLAY_MODES } from '~/constants';
import PickDisplayMode from '~/components/PickDisplayMode/PickDisplayMode';

function Estimator({ columns, cards, displayMode }) {
    const dispatch = useDispatch();

    const columnsComponents = columns.map(
        (column, columnId) => (
            <Column
                key={`column_${columnId}`}
                columnId={columnId}
                cardIds={column}
                cards={cards}
                displayMode={displayMode}
            />
        ),
    );

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="estimator">
                <div className="toolbar">
                    <CreateCard onCreateCard={(title) => dispatch(addCard(title))} />
                    <ClearBoard onClearBoard={() => dispatch(clearBoard())} />
                    <PickDisplayMode displayMode={displayMode} onChangeDisplayMode={(mode) => dispatch(changeDisplayMode(mode))} />
                </div>

                <div className="estimator-columns">
                    {columnsComponents}
                </div>
            </div>
        </DndProvider>
    );
}

Estimator.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    columns: PropTypes.array.isRequired,
    cards: PropTypes.shape({}).isRequired,
    displayMode: PropTypes.oneOf(Object.values(DISPLAY_MODES)).isRequired,
};

export default Estimator;

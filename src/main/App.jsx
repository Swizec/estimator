import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Estimator from '~/components/Estimator/Estimator';
import Loading from '~/components/Loading/Loading';
import AppError from '~/components/AppError/AppError';
import { LOADING_STATES } from '~/constants';

function App() {
    const appState = useSelector((state) => state.cards.appState);
    const cards = useSelector((state) => state.cards.cards);
    const columns = useSelector((state) => state.cards.columns);
    const displayMode = useSelector((state) => parseInt(state.cards.displayMode, 10));
    const lastChanged = useSelector((state) => parseInt(state.cards.lastChanged, 10));
    const appErrorDescription = useSelector((state) => state.cards.appErrorDescription);
    const dispatch = useDispatch();

    if (appState === LOADING_STATES.READY) {
        return (
            <Estimator cards={cards} columns={columns} dispatch={dispatch} displayMode={displayMode} lastChanged={lastChanged} />
        );
    }

    if (appState === LOADING_STATES.ERROR) {
        return (
            <AppError message={appErrorDescription} />
        );
    }

    return (
        <Loading appState={appState} />
    );
}

export default App;

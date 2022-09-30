export const ItemTypes = {
    CARD: 'CARD',
};

export const LOADING_STATES = {
    UNINITIALIZED: 'UNINITIALIZED',
    CONNECTING_TO_SERVER: 'CONNECTING_TO_SERVER',
    SUBSCRIBING_TO_RECEIVE_INITIAL_STATE: 'SUBSCRIBING_TO_RECEIVE_INITIAL_STATE',
    GETTING_INITIAL_STATE: 'GETTING_INITIAL_STATE',
    UNSUBSCRIBING_TO_RECEIVE_INITIAL_STATE: 'UNSUBSCRIBING_TO_RECEIVE_INITIAL_STATE',
    READY: 'READY',
    ERROR: 'ERROR',
};

export const INITIAL_STATE_SUBSCRIPTION = 'INITIAL_STATE_SUBSCRIPTION';

export const DISPLAY_MODES = {
    FIBONACCI: 0,
    TSHIRT: 1,
    POWERS_OF_TWO: 2,
    LINEAR: 3,
    BLANK: 4,
};

export const DISPLAY_MODE_LABEL_MAP = {
    [DISPLAY_MODES.FIBONACCI]: ['1', '2', '3', '5', '8', '13', '?'],
    [DISPLAY_MODES.TSHIRT]: ['xs', 's', 'm', 'l', 'xl', 'xxl', '?'],
    [DISPLAY_MODES.POWERS_OF_TWO]: ['1', '2', '4', '8', '16', '32', '?'],
    [DISPLAY_MODES.LINEAR]: ['1', '2', '3', '4', '5', '6', '?'],
    [DISPLAY_MODES.BLANK]: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
};

export const DISPLAY_MODE_LABELS = {
    [DISPLAY_MODES.FIBONACCI]: 'Fibonacci',
    [DISPLAY_MODES.TSHIRT]: 'T-shirt',
    [DISPLAY_MODES.POWERS_OF_TWO]: 'Powers of Two',
    [DISPLAY_MODES.LINEAR]: 'Linear',
    [DISPLAY_MODES.BLANK]: 'Blank',
};

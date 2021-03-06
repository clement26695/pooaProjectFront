import { Actions, ActionTypes } from './actions';

import { IWatchlistState } from '../../interfaces';

export function watchlistReducer(state : IWatchlistState  = {}, action: Actions): IWatchlistState {
    let hasErrorWhileAddingSerieToWatchlist: boolean;
    let isAddingSerieToWatchlist: boolean;
    switch (action.type) {
        // SERIES WATCHLIST ADD
        case ActionTypes.ADD_SERIE_TO_WATCHLIST_REQUEST:
            hasErrorWhileAddingSerieToWatchlist = false;
            isAddingSerieToWatchlist = true;
            return {...state, isAddingSerieToWatchlist, hasErrorWhileAddingSerieToWatchlist}
        case ActionTypes.ADD_SERIE_TO_WATCHLIST_FAILURE:
            hasErrorWhileAddingSerieToWatchlist = true;
            isAddingSerieToWatchlist = false;
            return {...state, isAddingSerieToWatchlist, hasErrorWhileAddingSerieToWatchlist}
        case ActionTypes.ADD_SERIE_TO_WATCHLIST_SUCCESS:
            return {...state};

        // FECTH USER WATCHLIST
        case ActionTypes.FETCH_USER_WATCHLIST_REQUEST:
            return {...state, };
        case ActionTypes.FETCH_USER_WATCHLIST_SUCCESS:
            return {...state, seriesInUserWatchlist: action.payload ? action.payload.series : []};
        case ActionTypes.FETCH_USER_WATCHLIST_FAILURE:
            return {...state, };
        default:
            return state;
    }
}
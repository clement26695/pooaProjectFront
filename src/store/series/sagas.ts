import { call, put, takeEvery } from 'redux-saga/effects';

import { ISerie } from '../../interfaces';
import { ActionTypes, SERIES_ACTIONS } from './actions';
import { Api } from './api';

const BASE_IMG_URL = "http://image.tmdb.org/t/p/original/";

export function* fetchSeries(): Iterator<any> {
    try {
        const rep = yield call(Api.fetchSeries, null);
        let data = rep.data;
        // // add missing value from api
        data = data.map((item: any): ISerie => ({
            id: item.id,
            imgSrc: BASE_IMG_URL + item.image as string,
            title: item.name as string,
        }));
        yield put(SERIES_ACTIONS.fecthSeriesSuccess({series: data}));
    } catch (error) {
        yield put(SERIES_ACTIONS.fecthSeriesFailure());
    }
}

export function* seriesSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.FETCH_SERIES_REQUEST, fetchSeries);
}
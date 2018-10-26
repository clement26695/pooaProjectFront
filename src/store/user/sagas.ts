import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import { push } from 'connected-react-router';

import { ActionTypes, USER_ACTIONS } from './actions';
import { Api } from './api';

export function* loginRequest(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.loginRequest, params.payload.login, params.payload.password);
        const data = rep.data as any;
        yield put(USER_ACTIONS.loginSuccess({user:data}));
    } catch (error) {
        yield put(USER_ACTIONS.loginFailure());
    }
}

export function* registerRequest(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.registerRequest, params.payload.login, params.payload.password, params.payload.birthdate);
        // tslint:disable-next-line:no-console
        console.log(rep);
        yield put(USER_ACTIONS.registerSuccess());
    } catch (error) {
        yield put(USER_ACTIONS.registerFailure());
    }
}

export function* afterLogin(): Iterator<any> {
    yield put(push('/home'));
}

export function* afterRegistrationSuccess(): Iterator<any> {
    yield delay(5000);
    yield put(USER_ACTIONS.registerRemoveSuccessAlert());
    yield put(push('/home'));
}

export function* userSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.LOGIN_REQUEST, loginRequest);
    yield takeEvery(ActionTypes.REGISTER_REQUEST, registerRequest);
    yield takeEvery(ActionTypes.LOGIN_SUCCESS, afterLogin);
    yield takeEvery(ActionTypes.REGISTER_SUCCESS, afterRegistrationSuccess);
}

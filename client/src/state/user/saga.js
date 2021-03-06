import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import UserService from '../../services/UserService';
import JobTitlesService from '../../services/JobTitlesService';

const userService = new UserService()
const jobTitlesService = new JobTitlesService()

function* fetchUsersFlow(action) {
    try {
        const res = yield call(userService.find, action.data);
        yield put({ type: actions.FETCH_USERS_SUCCESS, res });
    } catch(err) {
        throw err;
    }
}

function* watchFetchUsersFlow() {
    yield takeLatest(actions.FETCH_USERS, fetchUsersFlow);
}

function* updateUserFlow(action) {
    try {
        const res = yield call(userService.update, action.id, action.data);
        if (res.status !== 200 || !!res?.data?.errors) {
            const errors = res.data.errors;
            yield put({ type: actions.UPDATE_USER_FAILURE, errors: res.data.errors})
        } else {
            yield put({ type: actions.CLOSE_MODAL });
            yield put({ type: actions.FETCH_USERS });
        }
    } catch(err) {
        throw err;
    }
}

function* watchUpdateUserFlow() {
    yield takeLatest(actions.UPDATE_USER, updateUserFlow);
}

function* createUserFlow(action) {
    try {
        const res = yield call(userService.create, action.data);
        if (res.status !== 201 || !!res?.data?.errors) {
            const errors = res.data.errors;
            yield put({ type: actions.CREATE_USER_FAILURE, errors });
        } else {
            yield put({ type: actions.CLOSE_MODAL });
            yield put({ type: actions.FETCH_USERS });
        }
    } catch(err) {
        throw err;
    }
}

function* watchCreateUserFlow() {
    yield takeLatest(actions.CREATE_USER, createUserFlow);
}

function* deleteUserFlow(action) {
    try {
        const res = yield call(userService.remove, action.id);
        if (res.status !== 200) {
            yield put({ type: actions.DELETE_USER_FAILURE });
        } else {
            yield put({ type: actions.DELETE_USER_SUCCESS });
            yield put({ type: actions.FETCH_USERS });
        }
    } catch(err) {
        throw err;
    }
}

function* watchDeleteUserFlow() {
    yield takeLatest(actions.DELETE_USER, deleteUserFlow);
}

function* fetchJobTitles() {
    try {
        const res = yield call(jobTitlesService.find);
        yield put({ type: actions.FETCH_JOB_TITLES_SUCCESS, res })
    } catch(err) {
        throw err;
    }
}

function* watchFetchJobTitles() {
    yield takeLatest(actions.FETCH_JOB_TITLES, fetchJobTitles);
}

export default function* userSaga() {
    yield all([
        watchFetchUsersFlow(),
        watchFetchJobTitles(),
        watchUpdateUserFlow(),
        watchCreateUserFlow(),
        watchDeleteUserFlow()
    ]);
};
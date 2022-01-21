export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const MODAL_INPUT_CHANGE = 'MODAL_INPUT_CHANGE';

export const FETCH_JOB_TITLES = 'FETCH_JOB_TITLES';
export const FETCH_JOB_TITLES_SUCCESS = 'FETCH_JOB_TITLES_SUCCESS';
export const FETCH_JOB_TITLES_FAILURE = 'FETCH_JOB_TITLES_FAILURE';

const fetchUsers = (data) => {
    return {
        type: FETCH_USERS,
        data
    }
}

const fetchJobTitles = () => {
    return {
        type: FETCH_JOB_TITLES
    }
}

const updateUser = (id, data, params) => {
    return {
        type: UPDATE_USER,
        id,
        data,
        params
    }
}

const createUser = (data) => {
    return {
        type: CREATE_USER,
        data,
    }
}

const deleteUser = (id, params) => {
    return {
        type: DELETE_USER,
        id
    }
}

const openModal = (modalType, data) => {
    return {
        type: OPEN_MODAL,
        modalType,
        data
    }
};

const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

const handleFormInputChange = (field, value) => {
    return {
        type: MODAL_INPUT_CHANGE,
        field,
        value
    }
};

export const userActions = {
    fetchJobTitles,
    fetchUsers,
    updateUser,
    createUser,
    deleteUser,
    openModal,
    closeModal,
    handleFormInputChange
}

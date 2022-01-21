import * as types from './actions';

const userState = {
    jobTitles: [],
    users: [],
    limit: 10,
    offset: 0,
    isModalOpen: false,
    modalType: '',
    errors: {},
    form: {
        first_name: '',
        last_name: '',
        job_title: '',
        email: ''
    }
};

export default function user(state = userState, action) {
    switch (action.type) {
        case types.FETCH_USERS_SUCCESS:
            return { ...state, 
                users: action.res.data, 
                limit: 10,
                // offset: action.data.offset
            }
        case types.FETCH_JOB_TITLES_SUCCESS:
            return { ...state, 
                jobTitles: action.res.data 
            }
        case types.FETCH_USERS_FAILURE:
            return state;
        case types.UPDATE_USER_SUCCESS:
            return state;
        case types.CREATE_USER_FAILURE:
            return { ...state, 
                errors: action.errors }
        case types.UPDATE_USER_FAILURE:
            return { ...state,
                errors: action.errors
            }
        case types.OPEN_MODAL:
            return { ...state, 
                isModalOpen: true, 
                form: action.data, 
                modalType: action.modalType 
            }
        case types.CLOSE_MODAL:
            return { ...state,  
                isModalOpen: false, 
                form: userState.form, 
                modalType: userState.modalType 
            }
        case types.MODAL_INPUT_CHANGE:
            return { ...state, 
                form: {...state.form, [action.field]: action.value } 
            }
        default:
            return state
    }
}
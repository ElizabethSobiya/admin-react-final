import { 
    ACCOUNTS_PAGE,
    DASHBOARD_PAGE, 
    PRODUCT_PAGE, 
    DELETE_PRODUCT,
    DELETE_CATEGORY,
    ADD_PRODUCT,
    ADD_CATEGORY,
    UPDATE_CALL_API,
    UPDATE_PROFILE,
    IS_LOGGED_IN,
    IS_LOGGED_OUT,
    DELETE_USER} from './location'
import axios from 'axios'
import {v4 as uuid} from 'uuid'

export const adminData = () => {
     return async (dispatch) => {
        await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
        .then((res) => {
            const user = res.data;
            console.log(user)
            dispatch(acccountsPAGE(user.accountsPage));
            dispatch(productPAGE(user.productsPage));
            dispatch(dashboardPAGE(user.dasbhoardPage));
        })
     }
};

export const changeIsLoggedIn = (data) => {
    return {
        type: IS_LOGGED_OUT,
        payload: data,
    };
};

export const changeIsLoggedOut = (data) => {
    return {
        type: IS_LOGGED_IN,
        payload: data,
    };
};

export const changeAccountInfo = (data,name) => {
    return {
        type: UPDATE_PROFILE,
        payload: data,
        name: name,
    };
};

export const modifyCallApi = (data) => {
    return {
        type: UPDATE_CALL_API,
        payload: data,
    };
};

export const changeProductList = (data) => {
    return {
        type: DELETE_PRODUCT,
        payload: data,
    };
};

export const addNewCategory = (data) => {
    console.log(data)
    return {
        type: ADD_CATEGORY,
        payload: data,
    };
};

export const addNewProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data,
    };
};

export const changeCategoryList = (data) => {
    return {
        type: DELETE_CATEGORY,
        payload: data,
    };
};

export const acccountsPAGE = (data) => {
    return {
        type: ACCOUNTS_PAGE,
        payload: data,
    };
};

export const productPAGE = (data) => {
    return {
        type: PRODUCT_PAGE,
        payload: data,
    };
};

export const dashboardPAGE = (data) => {
    return {
        type: DASHBOARD_PAGE,
        payload: data,
    };
};

export const deleteUser = (data) => {
    return {
        type: DELETE_USER,
        payload: data,
    };
};
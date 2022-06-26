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
  DELETE_USER
} from './location'

const initialState = {
  accountPage: [],
  productPage: [],
  dashboardPage: [],
  callApi: true,
  LoginStatus: false
}

export default function reducer(state = initialState, action){
  console.log(action.payload)

  switch (action.type){
    case IS_LOGGED_IN: 
    return {
      ...state,
      LoginStatus:action.payload
    }

    case IS_LOGGED_OUT: 
    return {
      ...state,
      LoginStatus:action.payload
    }


    case ACCOUNTS_PAGE: 
    return {
      ...state,
      accountPage:action.payload
    }

    case PRODUCT_PAGE: 
    return {
      ...state,
      productPage:action.payload
    }
  
    case DASHBOARD_PAGE: 
    return {
      ...state,
      dashboradPage:action.payload
    }

    case DELETE_PRODUCT: 
    return {
      ...state,
      productPage: {
        ...state.productPage,
        products: action.payload
      }
    }

    case DELETE_CATEGORY: 
    return {
      ...state,
      productPage: {
        ...state.productPage,
        categories: action.payload
      }
    }

    case ADD_CATEGORY: 
    return {
      ...state,
      productPage: {
        ...state.productPage,
        categories: [...state.productPage.categories, action.payload]
      }
    }

    case ADD_PRODUCT: 
    return {
      ...state,
      productPage: {
        ...state.productPage,
        products: [...state.productPage.products, action.payload]
      }
    }

    case UPDATE_CALL_API: 
    return {
      ...state,
     callApi:false
    }
  
    case UPDATE_PROFILE: 
    return {
      ...state,
      accountPage: {
        ...state.accountPage,
      [action.name]:action.payload
      }
    }

    case DELETE_USER : 
    return{
      ...state,
      accountPage:{
        ...state.accountPage,
        [action.payload]: {
          name: '',
          email: '',
          password: '',
          phone: '',
          profilePic: ''
        }
      }
    }

    default: 
    return state;
  }
}
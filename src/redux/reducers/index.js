import { SELECT_APP, SET_LOCATIONS, SET_ROUTE } from '../constants/action-types'

const initialState = {
  currentApp: 'TML_APP',
  locations: [],
  currentRoute: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_APP: {
      return { ...state, currentApp: action.payload }
    }
    case SET_LOCATIONS: {
      return { ...state, locations: action.payload }
    }
    case SET_ROUTE: {
      return { ...state, currentRoute: action.payload }
    }
    default: {
      return state;
    }
  }
}

export default rootReducer

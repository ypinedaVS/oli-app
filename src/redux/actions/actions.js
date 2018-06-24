import { SELECT_APP, SET_LOCATIONS, SET_ROUTE } from '../constants/action-types'

export const selectApp = (payload) => ({
  type: SELECT_APP,
  payload
})

const setLocations = (payload) => ({
  type: SET_LOCATIONS,
  payload
})

export const search = () => (dispatch) => {
  setTimeout(() => {
    import('./data.json').then(data => {
      dispatch(setLocations(data))
    })
  }, 0)
}

export const setRoute = (payload) => ({
  type: SET_ROUTE,
  payload
})
